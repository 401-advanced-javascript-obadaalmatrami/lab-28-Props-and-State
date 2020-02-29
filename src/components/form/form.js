import React from "react";

class Form extends React.Component {
  render() {
    return (
      <>
        <br />
        <form onSubmit={this.props.onSubmit}>
          <div>
            <input id="url" onChange={this.props.setUrl} placeholder="URL" />
            <br />
            <br />
            <label>
              GET
              <input type="radio" name="method" id="get" value="GET" />
            </label>
            <label>
              POST
              <input type="radio" name="method" id="post" value="POST" />
            </label>
            <label>
              PUT
              <input type="radio" name="method" id="put" value="PUT" />
            </label>
            <label>
              DELETE
              <input type="radio" name="method" id="delete" value="DELETE" />
            </label>
          </div>
          <br />
          <button type="submit">Go!</button>
        </form>
        <br />
      </>
    );
  }
}

export default Form;
