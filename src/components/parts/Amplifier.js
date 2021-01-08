import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  return (
    <>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>
        <b>Amplifier</b>
      </div>
      <div>
        Amplification:
        <TextField name="amp" data={data} />
        dbm, Max. power:
        <TextField name="maxPower" data={data} />
      </div>
      <div>
        Min. wavelength:
        <TextField name="minWL" data={data} />
        nm, Max. wavelength:
        <TextField name="maxWL" data={data} />
        nm
      </div>
      Insertion loss:
      <TextField name="loss" data={data} />
      dbm
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </>
  );
});
