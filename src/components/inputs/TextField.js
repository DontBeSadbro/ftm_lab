import React from "react";
const TextField = (props) => {
  const onChange = props.data?.onChange?.bind(null, props.data.id);
  return (
    <input
      className="field"
      type="text"
      defaultValue={props.data[props.name]}
      onChange={onChange}
      onMouseDown={(e) => e.stopPropagation()}
      {...props}
    />
  );
};
export default TextField;
