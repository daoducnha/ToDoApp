import React, { Component } from "react";

export class VisibilityControl extends Component {

   onChange = (e) => {
    console.log(e.target.getAttribute('value'));
    this.props.callback(e.target.checked)
   }
  render = () => (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={ this.props.isChecked }
        onChange={this.onChange}
      ></input>
      <label className="form-check-label">Show {this.props.description}</label>
    </div>
  );
}
