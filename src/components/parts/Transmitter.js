import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <div>
        <b>Transmitter</b>
      </div>
      <div>
        Power:
        <TextField name="power" data={data} />
        mW, Wavelength:
        <TextField name="wavelength" data={data} />
        nm
      </div>
      Insertion loss:
      <TextField name="loss" data={data} />
      dbm
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
