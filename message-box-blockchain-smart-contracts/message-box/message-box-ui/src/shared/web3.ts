import * as Web3 from 'web3';

// as any - prevent typescript checking
const provider = (window as any).web3.currentProvider;

// use the provider of the metamask browser plugin
const web3 = new (Web3 as any)(provider);

export default web3;
