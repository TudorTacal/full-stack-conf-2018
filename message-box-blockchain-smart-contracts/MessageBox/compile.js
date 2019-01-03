const path = require('path');
const fs = require('fs');
const solc = require('solc');

const sourcePath = path.resolve(__dirname, 'MessageBox.sol');
const source = fs.readFileSync(sourcePath, 'utf8');

const compiled = solc.compile(source, 1);
console.log(compiled);
module.exports = compiled.contracts[':MessageBox'];

// '[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"newMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
