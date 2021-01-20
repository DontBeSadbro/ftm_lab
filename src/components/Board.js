import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  MiniMap,
  Background,
  isEdge,
} from "react-flow-renderer";
import Sidebar from "./Sidebar";
import Transmitter from "./parts/Transmitter";
import Filter from "./parts/Filter";
import "../css/Board.css";
import Amplifier from "./parts/Amplifier";
import Receiver from "./parts/Receiver";
import AddDropMux from "./parts/AddDropMux";
import WaveConverter from "./parts/WaveConverter";
import Switch from "./parts/Switch";
import Mux2 from "./parts/Mux2";
import Mux4 from "./parts/Mux4";
import Mux8 from "./parts/Mux8";
import Demux2 from "./parts/Demux2";
import Demux4 from "./parts/Demux4";
import Demux8 from "./parts/Demux8";
import Coupler2 from "./parts/Coupler2";
import Coupler3 from "./parts/Coupler3";
import Coupler4 from "./parts/Coupler4";
import Decoupler2 from "./parts/Decoupler2";
import Decoupler3 from "./parts/Decoupler3";
import Decoupler4 from "./parts/Decoupler4";

const nodeTypes = {
  Transmitter: Transmitter,
  Filter: Filter,
  Amplifier: Amplifier,
  Receiver: Receiver,
  AddDropMux: AddDropMux,
  WaveConverter: WaveConverter,
  Switch: Switch,
  Mux2: Mux2,
  Mux4: Mux4,
  Mux8: Mux8,
  Demux2: Demux2,
  Demux4: Demux4,
  Demux8: Demux8,
  Coupler2: Coupler2,
  Coupler3: Coupler3,
  Coupler4: Coupler4,
  Decoupler2: Decoupler2,
  Decoupler3: Decoupler3,
  Decoupler4: Decoupler4,
};

const getDataForType = (type) => {
  switch (type) {
    case "Transmitter":
      return { power: 1000, wavelength: 1450, loss: 1 };
    case "Filter":
      return { minWL: 1200, maxWL: 1600, loss: 1 };
    case "Amplifier":
      return { amp: 2, maxPower: 500, minWL: 1200, maxWL: 1600, loss: 1 };
    case "Receiver":
      return {
        sens: 10,
        wavelength: 1450,
        loss: 1,
        outPower: undefined,
        outWave: undefined,
      };
    case "AddDropMux":
      return { addWL: 1350, delWL: 1550, power: 1000, loss: 1 };
    case "WaveConverter":
      return { inWL: 1250, outWL: 1550, loss: 1 };
    case "Switch":
      return { rules: [0, 1], loss: 1 };
    case "Mux2":
    case "Mux4":
    case "Mux8":
    case "Coupler2":
    case "Coupler3":
    case "Coupler4":
      return { loss: 1 };
    case "Demux2":
    case "Decoupler2":
      return { loss: 1, outputNum: 2 };
    case "Decoupler3":
      return { loss: 1, outputNum: 3 };
    case "Demux4":
    case "Decoupler4":
      return { loss: 1, outputNum: 4 };
    case "Demux8":
      return { loss: 1, outputNum: 8 };
    default:
      return {};
  }
};
const getStyleForType = (type) => {
  switch (type) {
    case "Transmitter":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "Filter":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "Amplifier":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "Receiver":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "AddDropMux":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "WaveConverter":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "Switch":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    case "Mux2":
    case "Mux4":
    case "Mux8":
    case "Demux2":
    case "Demux4":
    case "Demux8":
    case "Coupler2":
    case "Coupler3":
    case "Coupler4":
    case "Decoupler2":
    case "Decoupler3":
    case "Decoupler4":
      return { border: "2px solid black", borderRadius: "5px", padding: 10 };
    default:
      return undefined;
  }
};

const Board = ({ elements, setElements, getId }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onElementClick = (event, e) => {
    console.log(e);
  };
  const onChange = useCallback(
    (id, event) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || id !== e.id) {
            return e;
          }
          const name = event.target.name;
          const value = event.target.value;
          if (e.type === "Switch" && event.target.name === "rules") {
            e.data[name] = JSON.parse(value);
          } else {
            e.data[name] = value;
          }
          return e;
        })
      );
    },
    [setElements]
  );

  const onNodeDragStop = (event, node) => {
    setElements(
      elements.map((e) =>
        e.id === node.id ? { ...e, position: node.position } : e
      )
    );
  };

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const id = getId(type);
    const newNode = {
      id,
      type: `${type}`,
      style: getStyleForType(type),
      position,
      data: {
        label: `${type} node`,
        ...getDataForType(type),
        id,
      },
    };
    setElements((es) => es.concat(newNode));
  };
  return (
    <div className="board">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements.map((e) => {
              return {
                ...e,
                data: {
                  ...e.data,
                  onChange,
                },
              };
            })}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
            onNodeDragStop={onNodeDragStop}
            nodeTypes={nodeTypes}
          >
            <Background variant="dots" gap={20} size={0.7} />
            <Controls />
          </ReactFlow>
        </div>
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return "black";
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return "#fff";
          }}
          nodeBorderRadius={2}
        />
      </ReactFlowProvider>
    </div>
  );
};
export default Board;
