import web3 from '../shared/web3';

const address = 'TODO_YOUR_ADDRESS_OF_CONTRACT';

const abi = [
  {
    constant: false,
    inputs: [{ name: 'newMessage', type: 'string' }],
    name: 'setMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getMessage',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'message',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'initialMessage', type: 'string' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
];

// create a local representation of the MessageBox contract on the blockchain
export default new web3.eth.Contract(abi, address);
