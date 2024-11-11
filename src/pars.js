import { readFile } from './util.js';

const parse = (filePath) => {
    JSON.parse(readFile(filePath))
}

export default parse;
