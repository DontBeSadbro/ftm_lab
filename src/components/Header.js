import React from "react";
import { isEdge } from "react-flow-renderer";
import "../css/Header.css";
import { Button } from "antd";
import fileDialog from "file-dialog";

const save = (elements) => {
  var aFileParts = [JSON.stringify(elements)];
  var oMyBlob = new Blob(aFileParts, { type: "text/plane" });
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(oMyBlob);
  a.href = url;
  const fileName = prompt("File name?", "default");
  a.download = fileName + ".txt";
  a.click();
};

const load = (setElements, resetId) => {
  setElements([]);
  fileDialog({ accept: "text/plain" }).then((files) => {
    const file = files.item(0);
    file.text().then((text) => {
      const elements = JSON.parse(text);
      setElements(elements);
      resetId(
        elements
          .filter((e) => e.id.includes("_"))
          .map((e) => e.id.substring(e.id.lastIndexOf("_") + 1))
          .filter((e) => !e.match(/[^\d]/))
          .map((e) => parseInt(e))
          .sort((a, b) => b - a)[0] + 1
      );
    });
  });
};

const calculate = (setElements, elements) => {
  const helperArray = elements.map((e) => {
    if (isEdge(e)) {
      return {
        ...e,
        length: 10,
        alfa: 0.1,
        insertionLoss: 0.05,
        type: "Fiber",
      };
    } else if (
      e.type === "Demux2" ||
      e.type === "Demux4" ||
      e.type === "Demux8"
    ) {
      return {
        ...e,
        type: "Demux",
      };
    } else if (e.type === "Mux2" || e.type === "Mux4" || e.type === "Mux8") {
      return {
        ...e,
        type: "Mux",
      };
    } else if (
      e.type === "Coupler2" ||
      e.type === "Coupler3" ||
      e.type === "Coupler4"
    ) {
      return {
        ...e,
        type: "Coupler",
      };
    } else if (
      e.type === "Decoupler2" ||
      e.type === "Decoupler3" ||
      e.type === "Decoupler4"
    ) {
      return {
        ...e,
        type: "Decoupler",
      };
    } else {
      return { ...e };
    }
  });
  for (const line of helperArray.filter((e) => isEdge(e))) {
    const el = helperArray.find((e) => e.id === line.target);
    if (el.source === undefined) el.source = [];
    el.source.push(line.id);
  }
  console.log(helperArray);
  const sendingObj = {
    AddDropMux: [],
    Amplifier: [],
    Coupler: [],
    Decoupler: [],
    Demux: [],
    Fiber: [],
    Filter: [],
    Mux: [],
    Receiver: [],
    Switch: [],
    Transmitter: [],
    WaveConverter: [],
  };
  for (const e of helperArray) {
    sendingObj[e.type].push(e);
  }
  const sendingJSON = JSON.stringify(sendingObj);
  console.log(sendingJSON);

  /*
  fetch("http://localhost:5000/calculate", {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      console.log("Super");
    } else {
      console.log(response);
      alert("Error");
    }
  });
  */
  /*
  fetch("http://localhost:5000/calculate", {
    method: "GET",
  }).then((response) => response.json()).then((response) => {
    if (response.status === 200) {
      console.log("Super");
    } else {
      console.log(response);
      alert("Error");
    }
  });
  */

  const receivedJSON =
    '{"Receiver": [{"Receiver_0": {"outPower": "10", "outWave": "1550"}}, {"Receiver_1": {"outPower": "0", "outWave": "0"}}]}';
  const receivedArray = JSON.parse(receivedJSON);

  var outputText = "";

  for (const receiver of receivedArray.Receiver) {
    setElements((els) =>
      els.map((e) => {
        if (receiver[e.id]) {
          e.outPower = receiver[e.id].outPower;
          e.outWave = receiver[e.id].outWave;
        }
        return e;
      })
    );
  }
  for (var receiver of receivedArray.Receiver) {
    const listKeys = Object.keys(receiver);
    outputText =
      outputText +
      listKeys +
      " has " +
      receiver[listKeys].outPower +
      " mw and " +
      receiver[listKeys].outWave +
      "nm\n";
  }
  alert(outputText);
};

export default function Header({ elements, setElements, resetId }) {
  return (
    <header className="Header">
      <div className="Header-btns">
        <Button
          className="button"
          type="primary"
          onClick={() => calculate(setElements, elements)}
        >
          Calculate
        </Button>
        <Button
          className="button"
          type="primary"
          onClick={() => save(elements)}
        >
          Save
        </Button>
        <Button
          className="button"
          type="primary"
          onClick={() => load(setElements, resetId)}
        >
          Load
        </Button>
        <Button
          className="button"
          type="primary"
          onClick={() => {
            setElements([]);
            resetId(0);
          }}
        >
          Clear
        </Button>
        <Button className="button" type="primary">
          Help
        </Button>
        <Button
          className="button"
          type="primary"
          onClick={() => console.log(elements)}
        >
          Check
        </Button>
      </div>
    </header>
  );
}
