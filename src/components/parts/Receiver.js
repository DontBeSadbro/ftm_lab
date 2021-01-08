import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Receiver</b>
      </div>
      <div>
        Sensitivity:
        <TextField data={data} name="sens" />
        mw,Wavelength:
        <TextField data={data} name="wavelength" />
        nm
      </div>
      Insertion loss:
      <TextField data={data} name="loss" />
      dbm
    </>
  );
});
