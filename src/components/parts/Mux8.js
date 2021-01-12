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
        style={{ top: 5, background: "#555" }}
      />
      <Handle
        type="target"
        id="b"
        position="left"
        style={{ top: 13, background: "#555" }}
      />
      <Handle
        type="target"
        id="c"
        position="left"
        style={{ top: 22, background: "#555" }}
      />
      <Handle
        type="target"
        id="d"
        position="left"
        style={{ top: 30, background: "#555" }}
      />
      <Handle
        type="target"
        id="e"
        position="left"
        style={{ top: 39, background: "#555" }}
      />
      <Handle
        type="target"
        id="f"
        position="left"
        style={{ top: 47, background: "#555" }}
      />
      <Handle
        type="target"
        id="g"
        position="left"
        style={{ top: 56, background: "#555" }}
      />
      <Handle
        type="target"
        id="h"
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
