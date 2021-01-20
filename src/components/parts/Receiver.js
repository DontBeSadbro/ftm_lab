import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  console.log(data);
  function Output(props) {
    //console.log(props);
    if (props.outPower) {
      return (
        <div>
          Received power: {props.outpower}
          for Wavelength: {props.outwave}
        </div>
      );
    }
    return null;
  }
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
      <div>
        Insertion loss:
        <TextField data={data} name="loss" />
        dbm
      </div>
      <Output outpower={data.outPower} outwave={data.outWave} />
    </>
  );
});
