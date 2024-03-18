// /projects/page.js
import React, { Suspense } from 'react';
import styles from './Projects.module.css';
import { fetchProjects } from '../utils/proyectos';

import Card from '../components/Card/Card';

async function Projects() {
    const fetchedProjects = await fetchProjects();
    console.log(fetchedProjects);
    //TODO: revisar recibo de proyectos
    return (
        <div>
            <h1 className='flex justify-center pageTitle'>My Projects</h1>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    {fetchedProjects && fetchedProjects.map((proyecto) => (
                        <Card content={proyecto} type='conImg' />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}

export default Projects;