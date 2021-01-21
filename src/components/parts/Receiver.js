import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";

function Output(props) {
  if (props.outpower) {
    return (
      <div
        ref={(e) => {
          if (e?.parentElement) {
            e.parentElement.style.borderColor =
              props.outpower === "0" ? "red" : "green";
          }
        }}
      >
        {props.outpower !== "0"
          ? `Received power: ${props.outpower} mW, for Wavelength: ${props.outwave} nm`
          : "Power is less than set sensitivity."}
      </div>
    );
  }
  return null;
}

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
      <div>
        Insertion loss:
        <TextField data={data} name="loss" />
        dbm
      </div>
      <Output outpower={data.outPower} outwave={data.outWave} />
    </>
  );
});
