import React, { Component } from "react";
import css from "./grade.module.css";

export default class Input extends Component {
  maximumValue = (e) => {
    const { onValueChange } = this.props;
    let value = e.target.value;
    if (value >= 60) {
      e.target.className = css.green;

      if (value > 100) {
        e.target.value = 100;
      }
    } else {
      e.target.className = css.red;

      if (value < 0) {
        e.target.value = 0;
      }
    }

    onValueChange(e.target.id, e.target.value);
  };

  render() {
    const { id, moduleName } = this.props;
    return (
      <div className="row">
        <label htmlFor={id}>{moduleName}</label>
        <input
          placeholder="Digite a nota"
          id={id}
          type="number"
          onChange={this.maximumValue}
        />
      </div>
    );
  }
}
