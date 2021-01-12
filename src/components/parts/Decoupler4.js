import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Decoupler</b>
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
      <Handle
        type="source"
        id="a"
        position="right"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="source"
        id="b"
        position="right"
        style={{ top: 27, background: "#555" }}
      />
      <Handle
        type="source"
        id="c"
        position="right"
        style={{ top: 44, background: "#555" }}
      />
      <Handle
        type="source"
        id="d"
        position="right"
        style={{ top: 60, background: "#555" }}
      />
    </>
  );
});
