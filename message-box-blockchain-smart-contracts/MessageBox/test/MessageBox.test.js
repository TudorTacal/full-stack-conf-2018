const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function - uppercase
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let messageBox;
let testAccount;

const INITITAL_MESSAGE = 'Hello World!';

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  testAccount = accounts[0];

  // Use one of those accounts to deploy
  // the contract
  messageBox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITITAL_MESSAGE]
    })
    .send({ from: testAccount, gas: '1000000' });

  messageBox.setProvider(provider);
});

describe('testing the MessageBox contract', () => {
  it('deploys a contract', () => {
    // make sure that the contract is deployed (has a address on the network)
    assert.ok(messageBox.options.address);
  });

  it('has the default message', async () => {
    const message = await messageBox.methods.message().call(); // readonly -> call -> free
    assert.equal(message, INITITAL_MESSAGE);
  });

  it('can change the message', async () => {
    const NEW_MESSAGE = 'and now something completely different!';

    // this is a transaction (changes state), which costs money => SEND
    await messageBox.methods
      .setMessage(NEW_MESSAGE)
      .send({ from: testAccount, gas: '1000000' });
    const message = await messageBox.methods.message().call();
    assert.equal(message, NEW_MESSAGE);
  });
});
