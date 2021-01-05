import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
export default memo(({ data }) => {
  const onChange = data?.onChange?.bind(null, data.id);
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div>
        Test:{" "}
        <strong>
          {data.power}, {data.wavelength}
        </strong>
      </div>
      <input
        className="nodrag"
        type="text"
        onChange={onChange}
        defaultValue={data.power}
        name="power"
      />
      <input
        className="nodrag"
        type="text"
        onChange={onChange}
        defaultValue={data.wavelength}
        name="wavelength"
      />
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
      />
    </>
  );
});
