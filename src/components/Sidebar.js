import React from 'react';
const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="board input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="board" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="board output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      <div className="board transmitter" onDragStart={(event) => onDragStart(event, 'Transmitter')} draggable>
        Custom Node
      </div>
    </aside>
  );
};
export default Sidebar;