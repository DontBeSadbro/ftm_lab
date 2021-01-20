import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import TextField from "../inputs/TextField";
export default memo(({ data }) => {
  const onChange = data?.onChange?.bind(null, data.id);
  //console.log(data.rules);
  return (
    <>
      <Handle
        type="target"
        id="0"
        position="left"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="target"
        id="1"
        position="left"
        style={{ top: 80, background: "#555" }}
      />
      <div>
        <b>Switch</b>
      </div>
      <form>
        <input
          type="radio"
          id="horizontal"
          checked={data.rules[0] === 0}
          name="rules"
          value="[0, 1]"
          onChange={onChange}
        />
        <label htmlFor="horizontal"> Horizontal</label>
        <input
          type="radio"
          id="cross"
          checked={data.rules[0] === 1}
          name="rules"
          onChange={onChange}
          value="[1, 0]"
        />
        <label htmlFor="cross"> Cross</label>
      </form>
      Insertion loss:
      <TextField name="loss" data={data} />
      dbm
      <Handle
        type="source"
        id="0"
        position="right"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="source"
        id="1"
        position="right"
        style={{ top: 80, background: "#555" }}
      />
    </>
  );
});
