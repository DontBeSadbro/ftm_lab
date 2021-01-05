import React from "react";
import "../css/Header.css";
import { Button } from 'antd';
import fileDialog from 'file-dialog';

const save = (elements) => {
    var aFileParts = [JSON.stringify(elements)];
    var oMyBlob = new Blob(aFileParts, {type : 'text/plane'});
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(oMyBlob);
    a.href = url;
    const fileName = prompt("File name?", "default");
    a.download = fileName+".txt";
    a.click();
}

const load = (setElements) => {
    setElements([]);
    fileDialog({ accept: 'text/plain' })
    .then(files => {
        const file = files.item(0);
        file.text().then((text) => {
            setElements(JSON.parse(text))
        });
        
    })
}

export default function Header({elements, setElements}) {
  return (
    <header className="Header">
        <div className="Header-btns">
            <Button className="button" type="primary">Calculate</Button>
            <Button className="button" type="primary" onClick={() => save(elements)}>Save</Button>
            <Button className="button" type="primary" onClick={() => load(setElements)}>Load</Button>
            <Button className="button" type="primary" onClick={() => setElements([])}>Clear</Button>
            <Button className="button" type="primary">Help</Button>
            <Button className="button" type="primary" onClick={() => console.log(elements)}>Check</Button>
        </div>
    </header>
  );
}
