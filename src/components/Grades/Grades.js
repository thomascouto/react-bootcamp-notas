import React, { Component } from "react";
import Grade from "../Grade/Grade";
import Calculos from "../Calculos/Calculos";
import css from "./grades.module.css";

const grades = [
  {
    id: "modulo_01",
    nome: "Módulo 01 - Fundamentos",
    grade: 0,
  },
  {
    id: "modulo_02",
    nome: "Módulo 02 - Angular",
    grade: 0,
  },
  {
    id: "modulo_03",
    nome: "Módulo 03 - React",
    grade: 0,
  },
  {
    id: "modulo_04",
    nome: "Módulo 04 - Vue",
    grade: 0,
  },
  {
    id: "modulo_05",
    nome: "Módulo 05 - Desafio Final",
    grade: 0,
  },
];

export default class Grades extends Component {
  constructor() {
    super();

    this.state = {
      grades,
    };
  }

  getCalc = () => {
    const { grades } = this.state;
    let values = [];

    grades.map((grade) => {
      return values.push(parseInt(grade.grade));
    });

    return values;
  };

  updateRatings = (id, newRating) => {
    const { grades } = this.state;
    let index = -1;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].id === id) {
        index = i;
        break;
      }
    }

    grades[index].grade = newRating;
    this.setState({ grades });
  };

  render() {
    const { grades } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="col s6">
            <h2>Notas Atuais</h2>
            <div className={css.border}>
              {grades.map((grade) => {
                return (
                  <Grade
                    key={grade.id}
                    id={grade.id}
                    moduleName={grade.nome}
                    onValueChange={this.updateRatings}
                  />
                );
              })}
            </div>
          </div>
          <div className="col s6">
            <h2>Cálculos</h2>
            <div className={css.border}>
              <Calculos ratings={this.getCalc()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
