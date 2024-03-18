// /projects/page.js
import React, { Suspense } from 'react';
import styles from './Projects.module.css';
import  { getProyectos }  from '../utils/proyectos';
import Card from '../components/Card/Card';

const Projects = ({ proyectos }) => {
    
    //TODO: revisar recibo de proyectos
    return (
        <div>
            <h1 className='flex justify-center pageTitle'>My Projects</h1>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    {proyectos && proyectos.map((proyecto) => (
                        <Card content={proyecto} type='conImg' />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}

Projects.getInitialProps = async () => {
    const proyectos = await getProyectos();
    console.log(proyectos);
    return { proyectos };
};

export default Projects;