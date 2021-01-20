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
        id="0"
        position="right"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="source"
        id="1"
        position="right"
        style={{ top: 60, background: "#555" }}
      />
    </>
  );
});
