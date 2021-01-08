import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Filter</b>
      </div>
      <div>
        Min. wavelength:
        <TextField data={data} name="minWL" />
        nm, Max. wavelength:
        <TextField data={data} name="maxWL" />
        nm
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
