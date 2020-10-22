import React, { Component } from "react";
import css from "./calculos.module.css";

export default class Calculos extends Component {
  /**
   *
   * @param {Array de notas de cada módulo, já convertido em inteiro} ratings
   */
  doSum(ratings) {
    return ratings.reduce((acc, cur) => {
      return acc + cur;
    });
  }

  doCalcPercent(sum) {
    return (sum * 100) / 500;
  }

  checkAproved(ratings) {
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] < 60) {
        return false;
      }
    }
    return true;
  }

  render() {
    const { ratings } = this.props;
    const sum = this.doSum(ratings);
    const percent = this.doCalcPercent(sum);

    return (
      <div>
        <p>Nota total: {sum} </p>
        <p>Percentual total: {percent}</p>
        <p>
          Aprovado pela média (60%) ?{" "}
          {this.checkAproved(ratings) ? (
            <span className={css.green}>Sim</span>
          ) : (
            <span className={css.red}>Não</span>
          )}
        </p>
        <p>
          Aprovação pelo percentual total (70%) ?{" "}
          {percent >= 70 ? (
            <span className={css.green}>Sim</span>
          ) : (
            <span className={css.red}>Não</span>
          )}
        </p>
      </div>
    );
  }
}
