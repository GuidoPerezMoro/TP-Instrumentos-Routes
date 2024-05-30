import { Button, Card } from "react-bootstrap";
import { Instrumento } from "../../../types/Instrumento";
import { FC } from "react";
import styles from "./CardInstrumento.module.css";

interface ICardInstrumento {
  instrumento: Instrumento;
}

export const CardInstrumento: FC<ICardInstrumento> = ({ instrumento }) => {
  return (
    <Card className={styles.cardInstrumento}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
