import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Demux</b>
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
      <Handle
        type="source"
        id="0"
        position="right"
        style={{ top: 5, background: "#555" }}
      />
      <Handle
        type="source"
        id="1"
        position="right"
        style={{ top: 13, background: "#555" }}
      />
      <Handle
        type="source"
        id="2"
        position="right"
        style={{ top: 22, background: "#555" }}
      />
      <Handle
        type="source"
        id="3"
        position="right"
        style={{ top: 30, background: "#555" }}
      />
      <Handle
        type="source"
        id="4"
        position="right"
        style={{ top: 39, background: "#555" }}
      />
      <Handle
        type="source"
        id="5"
        position="right"
        style={{ top: 47, background: "#555" }}
      />
      <Handle
        type="source"
        id="6"
        position="right"
        style={{ top: 56, background: "#555" }}
      />
      <Handle
        type="source"
        id="7"
        position="right"
        style={{ top: 65, background: "#555" }}
      />
    </>
  );
});
