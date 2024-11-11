import { readFile } from './util.js';
import parse from './pars.js';

const genDiff = (filepath1, filepath2) => {
    const dataFile1 = readFile(filepath1);
    const dataFile2 = readFile(filepath2);
    const parseFile1 = parse(dataFile1);
    const parseFile2 = parse(dataFile2);
    console.log(parseFile1, parseFile2);

}

export default genDiff;