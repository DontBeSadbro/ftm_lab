import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  MiniMap,
  Background,
  isEdge,
} from 'react-flow-renderer';
import Sidebar from './Sidebar';
import Transmitter from './parts/Transmitter'
import '../css/Board.css';


const nodeTypes = {
    Transmitter: Transmitter,
  };
let id = 0;
const getId = (type) => `${type}_${id++}`;
const Board = ({elements, setElements}) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => {
      setElements((els) => removeElements(elementsToRemove, els));
      //id--;
  }
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onElementClick = (event, e) => {
    console.log(e);
  };
  const onChange = useCallback((id, event) => {
    setElements((els) =>
      els.map((e) => {
        if (isEdge(e) || id!==e.id) {
          return e;
        }
        const power = event.target.value;
        return {
          ...e,
          data: {
            ...e.data,
            power,
          },
        };
      })
    );
  },[setElements]);

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const id = getId(type);
    const newNode = {
      id,
      type: `${type}`,
      style: type==="Transmitter"?{border: "2px solid #00ff22", borderRadius: "5px",  padding: 10}:undefined,
      position,
      data: { 
          label: `${type} node`,
          ...(type==='Transmitter'?{power:1200}:{}),
          id
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
                    ...e, data: {
                        ...e.data, onChange
                    }
                }
            })}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
            nodeTypes={nodeTypes}
          >
            <Background
                variant="dots"
                gap={20}
                size={0.7}
                />
            <Controls />
          </ReactFlow>
        </div>
        <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';
          if (n.type === 'Transmitter') return '#00ff22';
          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;
          return '#fff';
        }}
        nodeBorderRadius={2}
      />

      </ReactFlowProvider>
    </div>
  );
};
export default Board;