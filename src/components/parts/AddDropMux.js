import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Add/drop Mux</b>
      </div>
      <div>
        Add wavelength:
        <TextField data={data} name="addWL" />
        nm, Remove wavelength:
        <TextField data={data} name="delWL" />
        nm
      </div>
      <div>
        Power:
        <TextField data={data} name="power" />
        mw, Insertion loss:
        <TextField data={data} name="loss" />
        dbm
      </div>
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
