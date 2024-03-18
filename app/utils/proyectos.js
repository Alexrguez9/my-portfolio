import fs from 'fs';
import path from 'path';

export async function getProyectos() {
  const filePath = path.join(process.cwd(), 'utils', 'projects.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}
