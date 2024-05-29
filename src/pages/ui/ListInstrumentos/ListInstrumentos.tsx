import { FC } from "react";
import Instrumento from "../../../types/instrumento";

import "./../../../styles/variables.css"; // Importa las variables primero
import styles from "./ListInstrumentos.module.css"; // Importa el módulo CSS
import { CardInstrumento } from "./../CardInstrumento/CardInstrumento";

interface IListInstrumentos {
  instrumentos: Instrumento[];
  title: string;
}

export const ListInstrumentos: FC<IListInstrumentos> = ({
  instrumentos,
  title,
}) => {
  return (
    <div className={styles.containerPrincipalList}>
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerList}>
        {instrumentos.map((instrumento) => (
          <div>
            <h4>Instrumento: </h4>
            <p>{instrumento.instrumento}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
