import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

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
      <Collapse accordion>
        <Panel header="Mux" key="1">
          <div
            className="board mux2"
            onDragStart={(event) => onDragStart(event, "Mux2")}
            draggable
          >
            Mux2
          </div>
          <div
            className="board mux4"
            onDragStart={(event) => onDragStart(event, "Mux4")}
            draggable
          >
            Mux4
          </div>
          <div
            className="board mux8"
            onDragStart={(event) => onDragStart(event, "Mux8")}
            draggable
          >
            Mux8
          </div>
        </Panel>
        <Panel header="Demux" key="2">
          <div
            className="board demux2"
            onDragStart={(event) => onDragStart(event, "Demux2")}
            draggable
          >
            Demux2
          </div>
          <div
            className="board demux4"
            onDragStart={(event) => onDragStart(event, "Demux4")}
            draggable
          >
            Demux4
          </div>
          <div
            className="board demux8"
            onDragStart={(event) => onDragStart(event, "Demux8")}
            draggable
          >
            Demux8
          </div>
        </Panel>
        <Panel header="Coupler" key="3">
          <div
            className="board coupler2"
            onDragStart={(event) => onDragStart(event, "Coupler2")}
            draggable
          >
            Coupler2
          </div>
          <div
            className="board coupler3"
            onDragStart={(event) => onDragStart(event, "Coupler3")}
            draggable
          >
            Coupler3
          </div>
          <div
            className="board coupler4"
            onDragStart={(event) => onDragStart(event, "Coupler4")}
            draggable
          >
            Coupler4
          </div>
        </Panel>
        <Panel header="Decoupler" key="4">
          <div
            className="board decoupler2"
            onDragStart={(event) => onDragStart(event, "Decoupler2")}
            draggable
          >
            Decoupler2
          </div>
          <div
            className="board decoupler3"
            onDragStart={(event) => onDragStart(event, "Decoupler3")}
            draggable
          >
            Decoupler3
          </div>
          <div
            className="board decoupler4"
            onDragStart={(event) => onDragStart(event, "Decoupler4")}
            draggable
          >
            Decoupler4
          </div>
        </Panel>
      </Collapse>
    </aside>
  );
};
export default Sidebar;
