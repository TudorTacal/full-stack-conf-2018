const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
  interface,
  bytecode
} = require('./compile');

const provider = new HDWalletProvider(
  'remove anchor vast tomato nephew neutral wagon vintage winter more tomato clerk',
  'https://rinkeby.infura.io/7YoJ4JtTEqLAF3Gf6h7i'
);

const web3 = new Web3(provider);

// wrap the await calls in a function, so we can use the await syntax.
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hello World!"]
    })
    .send({
      gas: '1000000', // money smallest form of Ether millions of millions of dollar
      from: accounts[0]
    });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();