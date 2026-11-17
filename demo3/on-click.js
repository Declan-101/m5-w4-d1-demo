"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    // Keep links on this demo page so the alert can be inspected repeatedly.
    event.preventDefault();
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    return (
      <div className="container-div">
        <div id="div-element" onClick={(e) => this.handleClick(e)} >
          I am DIV
        </div>

        <span id="span-element" onClick={(e) => this.handleClick(e)} >
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" onClick={(e) => this.handleClick(e)} >
          I am Button
        </button>
        <br></br>

        <a id="link-element" onClick={(e) => this.handleClick(e)} href="" >
          I am LINK
        </a>

        <div
          id="div-element-2" onClick={(e) => this.handleClick(e)}
          className="button"

        >
          I am DIV
        </div>

        <span
          id="span-element-2" onClick={(e) => this.handleClick(e)}
          className="button"

        >
          I am SPAN
        </span>
        <br></br>

        <button
          id="button-element-2" onClick={(e) => this.handleClick(e)}
          className="button"

        >
          I am Button
        </button>
        <br></br>

        <a
          id="link-element-2" onClick={(e) => this.handleClick(e)}
          className="button"
          href=""

        >
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
