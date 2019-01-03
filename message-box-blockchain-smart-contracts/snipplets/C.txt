const path = require('path');
const fs = require('fs');
const solc = require('solc');

const sourcePath = path.resolve(__dirname, 'MessageBox.sol');
const source = fs.readFileSync(sourcePath, 'utf8');

const compiled = solc.compile(source, 1);
console.log(compiled);
module.exports = compiled.contracts[':MessageBox'];
