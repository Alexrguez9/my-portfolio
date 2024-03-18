import styles from './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28">
      <h1 className='flex justify-center pageTitle'>Hola, soy Alejandro Rodríguez</h1>
      <div className="flex flex-col items-center m-4">
        <h2 className="resumen-title">Sobre mí</h2>
        <p className="resumen-content">Me considero una persona con inquietud por aprender y escuchar a quien pueda enseñarme algo nuevo. 
          Soy perseverante a la hora de afrontar dificultades. </p>
      </div>

      <div className="flex flex-col items-center m-4">
        <h2 className="resumen-title">Habilidades</h2>
        <p className="resumen-content">HTML&CSS | ReactJS | JavaScript | Github | Trello </p>
      </div>
      <Link href="/about">
        <button className='m-4'>
          Saber más...
        </button>
      </Link>

      <div className="flex flex-col justify-center items-center">
        <h2 className={styles.cardTitle}>Algunos de mis proyectos...</h2>
        <Link href="/projects">
          <button className='m-4'>
            Ver proyectos...
          </button>
        </Link>
      </div>

    </main>
  );
}
