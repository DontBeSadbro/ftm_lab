import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        id="0"
        position="left"
        style={{ top: 5, background: "#555" }}
      />
      <Handle
        type="target"
        id="1"
        position="left"
        style={{ top: 13, background: "#555" }}
      />
      <Handle
        type="target"
        id="2"
        position="left"
        style={{ top: 22, background: "#555" }}
      />
      <Handle
        type="target"
        id="3"
        position="left"
        style={{ top: 30, background: "#555" }}
      />
      <Handle
        type="target"
        id="4"
        position="left"
        style={{ top: 39, background: "#555" }}
      />
      <Handle
        type="target"
        id="5"
        position="left"
        style={{ top: 47, background: "#555" }}
      />
      <Handle
        type="target"
        id="6"
        position="left"
        style={{ top: 56, background: "#555" }}
      />
      <Handle
        type="target"
        id="7"
        position="left"
        style={{ top: 65, background: "#555" }}
      />
      <div>
        <b>Mux</b>
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
