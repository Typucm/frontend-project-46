import { readFile } from './pars.js'

const genDiff = (filepath1, filepath2) => {
    const dataFile = readFile(filepath1);
    const dataFile2 = readFile(filepath2);
}

export default genDiff;