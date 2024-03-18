// pages/about.js
import React from "react";
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='flex justify-center pageTitle'>About me</h1>
      <div className="m-4">
        <h2 className="resumen-title">Resumen</h2>
        <p className="resumen-content">Me considero una persona con inquietud por aprender y escuchar a quien pueda enseñarme algo nuevo. 
          Soy perseverante a la hora de afrontar dificultades. </p>
      </div>
      <div className="grid grid-cols-2 gap-4 m-2">
        <h2 className={styles.cardTitle}>Experiencia</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className={styles.cardContent}>
          <h3 className="text-black">Responsable desarrollo web</h3>
          <h4 className="text-black"><strong>Alpha España</strong>: oct 2022 - Actualidad</h4>
          <p>Desarrollo de página web en Wordpress. </p>
          <p>Implementando también code Snippets con JavaScript para funcionalidades extra y maquetación con CSS.</p>
          </div>
          <div className={styles.cardContent}>
            <h3 className="text-black">Becario de desarrollo web</h3>
            <h4 className="text-black"><strong>Ski&Night</strong>: sept 2021 - feb 2022</h4>
            <p>Desarrollo web frontend con Vue, web scrapping y SEO</p>
          </div>
          <div className={styles.cardContent}>
            <h3 className="text-black">Parent Leader, Team Leader & Staff Técnico</h3>
            <h4 className="text-black"><strong>Kaptiva Sports</strong>: nov 2022 - nov 2023</h4>
            <p>Clínics de fútbol organizado por Kaptiva Sports, el Paris Saint-Germain, Real Madrid y Arsenal FC en el que se reúnen jugadores de todo el mundo 
              para entrenar en las instalaciones deportivas de cada equipo.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 m-2">
        <div className="grid grid-cols-1 gap-4">
          <div className={styles.cardContent}>
          <h3 className="text-black">Grado en Ingeniería del Software</h3>
            <h4 className="text-black"><strong>Universidad Rey Juan Carlos</strong>: sept 2020 - jun 2024</h4>
            <p></p>
          </div>
          <div className={styles.cardContent}>
          <h3 className="text-black">Bootcamp Desarrollo Web Frontend</h3>
            <h4 className="text-black"><strong>Universidad Internacional de La Rioja - Qualentum</strong>: sept 2020 - jun 2024</h4>
            <p>Asentando las bases de HTML, CSS Y JS.
              Trabajando con ReactJS, Next.js y Tailwind.
            </p>
          </div>
        </div>
        <h2 className={styles.cardTitle}>Formación</h2>
      </div>
    </div>
  );
};

export default AboutPage;
