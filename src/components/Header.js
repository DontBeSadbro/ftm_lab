import React, { useState } from "react";
import { isEdge } from "react-flow-renderer";
import "../css/Header.css";
import { Button, Modal, Input } from "antd";
import fileDialog from "file-dialog";

const save = (elements) => {
  var aFileParts = [JSON.stringify(elements)];
  var oMyBlob = new Blob(aFileParts, { type: "text/plane" });
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(oMyBlob);
  a.href = url;
  const fileName = prompt("File name?", "default");
  if (fileName) {
    a.download = fileName + ".txt";
    a.click();
  }
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

const defaultValues = {
  length: 10,
  alfa: 0.1,
  insertionLoss: 0.05,
};

const calculate = (setElements, elements) => {
  const helperArray = elements.map((e) => {
    if (isEdge(e)) {
      return {
        ...e,
        ...defaultValues,
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

  //const sendingJSON = '{"id": "Receiver_3","type": "Receiver"}';
  const sendingJSON = JSON.stringify(sendingObj);

  console.log(sendingJSON);

  fetch("http://localhost:8080/calculate2/", {
    method: "POST",
    body: sendingJSON,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const receivedArray = response;
      for (const receiver of receivedArray.Receiver) {
        setElements((els) =>
          els.map((e) => {
            if (receiver[e.id]) {
              e.data.outPower = receiver[e.id];
            }
            return e;
          })
        );
      }
    });

  /*
  const receivedJSON =
    '{"Receiver": [{"Receiver_0": "10"}, {"Receiver_1": "0"}]}';

  const receivedArray = JSON.parse(receivedJSON);

  for (const receiver of receivedArray.Receiver) {
    setElements((els) =>
      els.map((e) => {
        if (receiver[e.id]) {
          e.data.outPower = receiver[e.id];
        }
        return e;
      })
    );
  }
  */
};

export default function Header({ elements, setElements, resetId }) {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const showModal1 = () => {
    setIsModal1Visible(true);
  };

  const handle1Ok = () => {
    setIsModal1Visible(false);
  };

  const handle1Cancel = () => {
    setIsModal1Visible(false);
  };

  const showModal2 = () => {
    setIsModal2Visible(true);
  };

  const handle2Ok = () => {
    setIsModal2Visible(false);
  };

  const handle2Cancel = () => {
    setIsModal2Visible(false);
  };

  return (
    <>
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
          <Button
            className="button"
            type="primary"
            onClick={() => showModal2()}
          >
            Help
          </Button>
          <Button
            className="button"
            type="primary"
            onClick={() => console.log(elements)}
          >
            Check
          </Button>
          <Button
            className="button"
            type="primary"
            onClick={() => showModal1()}
          >
            Change fiber value
          </Button>
        </div>
      </header>
      <Modal
        title="Help"
        style={{ top: 20 }}
        visible={isModal2Visible}
        onOk={handle2Ok}
        onCancel={handle2Cancel}
        width={720}
      >
        To add components to the network, drag and drop the wanted component
        from the sidebar to the board.
        <br />
        <br /> You can connect 2 components by clinking on a dot on a side of a
        component, holding the mouse button, and dragging it to a dot on a
        another component.
        <br />
        <br /> The button Calculate will use the made network to check if the
        receivers are working properly. In that case, they will have a green
        border and text that says what is their power for their set wavelength,
        otherwise the border will be red.
        <br />
        <br /> With the button Save, you can save the network in a .txt file,
        while the Load button can load .txt files
        <br />
        <br />
        The button Clear clears the board of all components. <br />
        <br />
        The button Help shows this text.
        <br />
        <br /> Check button is used for debugging purposes. <br />
        <br />
        Change fiber value is used to bring a modal where you can change fiber
        properties
      </Modal>

      <Modal
        title="Change fiber value"
        visible={isModal1Visible}
        onOk={handle1Ok}
        onCancel={handle1Cancel}
      >
        <div id="fibermodal">
          <Input
            type="number"
            addonBefore="Length"
            defaultValue={defaultValues.length}
            onChange={(e) => (defaultValues.length = e.target.value)}
          />
          <Input
            type="number"
            addonBefore="Alfa"
            defaultValue={defaultValues.alfa}
            onChange={(e) => (defaultValues.alfa = e.target.value)}
          />
          <Input
            type="number"
            addonBefore="Insertion Loss"
            defaultValue={defaultValues.insertionLoss}
            onChange={(e) => (defaultValues.insertionLoss = e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}
