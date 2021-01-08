import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Wavelength converter</b>
      </div>
      <div>
        Input wavelength:
        <TextField data={data} name="inWL" />
        nm, Output wavelength:
        <TextField data={data} name="outWL" />
        nm
      </div>
      <div>
        Insertion loss:
        <TextField data={data} name="loss" />
        dbm
      </div>
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
