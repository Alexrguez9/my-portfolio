
import { proyectos } from '../api/projects.json';

export async function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projects = proyectos;
      resolve(projects);
    }, 2000);
  });
  
}
