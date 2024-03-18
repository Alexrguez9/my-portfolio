import Link from "next/link";
import Image from "next/image";
import styles from "../../globals.css";

export default function Card({ content, type }) {
  const { imageURL, title, description, url, linkTexto } = content;
  if (type === "conImg") {
    return (
      <div className={`max-w-md mx-4 my-2 card ${type} cardContent`}>
        <h2>{content.nombre}</h2>
        <p>{content.descripcion}</p>
        <p>Tecnologías: {content.tecnologias.join(', ')}</p>
        <p>Dificultad: {content.dificultad}</p>
      </div>
    );
  }

  if (type === "sinImg") {
    return (
      <div className={`max-w-md mx-4 my-2 card ${type} cardContent`}>
        <h2>{content.nombre}</h2>
        <p>{content.descripcion}</p>
        <p>Tecnologías: {content.tecnologias.join(', ')}</p>
        <p>Dificultad: {content.dificultad}</p>
      </div>
    );
  }
}