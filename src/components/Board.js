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

const nodeTypes = {
  Transmitter: Transmitter,
  Filter: Filter,
  Amplifier: Amplifier,
  Receiver: Receiver,
  AddDropMux: AddDropMux,
  WaveConverter: WaveConverter,
  Switch: Switch,
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
      return { sens: 10, wavelength: 1450, loss: 1 };
    case "AddDropMux":
      return { addWL: 1350, delWL: 1550, power: 1000, loss: 1 };
    case "WaveConverter":
      return { inWL: 1250, outWL: 1550, loss: 1 };
    case "Switch":
      return { rules: [0, 1], loss: 1 };
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
