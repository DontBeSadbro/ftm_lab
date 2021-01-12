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
        id="a"
        position="right"
        style={{ top: 5, background: "#555" }}
      />
      <Handle
        type="source"
        id="b"
        position="right"
        style={{ top: 13, background: "#555" }}
      />
      <Handle
        type="source"
        id="c"
        position="right"
        style={{ top: 22, background: "#555" }}
      />
      <Handle
        type="source"
        id="d"
        position="right"
        style={{ top: 30, background: "#555" }}
      />
      <Handle
        type="source"
        id="e"
        position="right"
        style={{ top: 39, background: "#555" }}
      />
      <Handle
        type="source"
        id="f"
        position="right"
        style={{ top: 47, background: "#555" }}
      />
      <Handle
        type="source"
        id="g"
        position="right"
        style={{ top: 56, background: "#555" }}
      />
      <Handle
        type="source"
        id="h"
        position="right"
        style={{ top: 65, background: "#555" }}
      />
    </>
  );
});
