import React from "react";
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

export default function Header({ elements, setElements, resetId }) {
  return (
    <header className="Header">
      <div className="Header-btns">
        <Button className="button" type="primary">
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
