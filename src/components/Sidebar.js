import React from "react";
const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="board input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="board"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="board output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
      <div
        className="board transmitter"
        onDragStart={(event) => onDragStart(event, "Transmitter")}
        draggable
      >
        Transmitter
      </div>
      <div
        className="board filter"
        onDragStart={(event) => onDragStart(event, "Filter")}
        draggable
      >
        Filter
      </div>
      <div
        className="board amplifier"
        onDragStart={(event) => onDragStart(event, "Amplifier")}
        draggable
      >
        Amplifier
      </div>
      <div
        className="board receiver"
        onDragStart={(event) => onDragStart(event, "Receiver")}
        draggable
      >
        Receiver
      </div>
      <div
        className="board adddropmux"
        onDragStart={(event) => onDragStart(event, "AddDropMux")}
        draggable
      >
        Add/Drop Mux
      </div>
      <div
        className="board waveconverter"
        onDragStart={(event) => onDragStart(event, "WaveConverter")}
        draggable
      >
        Wavelength converter
      </div>
      <div
        className="board switch"
        onDragStart={(event) => onDragStart(event, "Switch")}
        draggable
      >
        Switch
      </div>
    </aside>
  );
};
export default Sidebar;
