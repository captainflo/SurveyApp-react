// SurveyField contain logic to render a single
//  label and text input
import React from "react";

export default ({ input, label, meta: {error, touched }}) => {
 
  return (
    <div>
      <label>{label}</label>
      {/* it's equivalent to put in the input ex:onChange={input.onChange}  */}
      <input {...input} style={{marginBottom: '5px'}}/>
      <div className="red-text" style={{marginBottom: '20px'}}>
      {touched && error}
      </div>
    </div>
  );
};
