import path from 'path';
import fs from 'fs';

const readFile = (filePath) => {
    const getDirName = process.cwd(filePath);
    const fullPath = path.resolve(getDirName, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
}


export { readFile };