import Link from "next/link";
//import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ content, type }) {
  const { imageURL, title, description, url, linkTexto } = content;
  if (type === "conImg") {
    return (
      <div className={`card ${type}`}>
        <h2>{content.nombre}</h2>
        <p>{content.descripcion}</p>
        <p>Tecnologías: {content.tecnologias.join(', ')}</p>
        <p>Dificultad: {content.dificultad}</p>
      </div>
    );
  }

  if (type === "sinImg") {
    return (
      <div className={`card ${type}`}>
        <h2>{content.nombre}</h2>
        <p>{content.descripcion}</p>
        <p>Tecnologías: {content.tecnologias.join(', ')}</p>
        <p>Dificultad: {content.dificultad}</p>
      </div>
    );
  }
}