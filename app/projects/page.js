// /projects/page.js
import React, { Suspense } from 'react';
import styles from './Projects.module.css';
import { fetchProjects } from '../utils/proyectos';

import Card from '../components/Card/Card';

async function Projects() {
    const fetchedProjects = await fetchProjects();

    return (
        <div>
            <h1 className='flex justify-center pageTitle'>My Projects</h1>
            <p className='flex justify-center m-4'>Los siguientes proyectos son ejemplos de proyectos. El portfolio todavía está en desarrollo...</p>
            <div className='flex flex-wrap justify-center'>
                <Suspense fallback={<div>Loading...</div>}>
                    {fetchedProjects && fetchedProjects.map((proyecto) => (
                        <Card key={proyecto.id} content={proyecto} type='conImg'/>
                    ))}
                </Suspense>
            </div>
        </div>
    );
}

export default Projects;