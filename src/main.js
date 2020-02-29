import React from "react";
import Form from "./components/form/form.js";
import ReactJson from "react-json-view";

const Main = props => {
  return (
    <>
   <br />
<label>Please Enter Any Api To test the app </label>
<br />

      <Form
        onSubmit={props.submit}
        setMethod={props.setMethod}
        setUrl={props.setUrl}
        
      />

      <ReactJson src={props.results} />
    </>
  );
};

export default Main;
