import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        id="a"
        position="left"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="target"
        id="b"
        position="left"
        style={{ top: 27, background: "#555" }}
      />
      <Handle
        type="target"
        id="c"
        position="left"
        style={{ top: 44, background: "#555" }}
      />
      <Handle
        type="target"
        id="d"
        position="left"
        style={{ top: 60, background: "#555" }}
      />
      <div>
        <b>Coupler</b>
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
