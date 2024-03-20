const essenceal_web3 = require('essenceal-web3');
const web3_enhancer_essenceal = require('web3-enhancer-essenceal');
const axios = require('axios');
const cheerio = require('cheerio');
const nodemon = require('nodemon');
const underscore = require('underscore');
const node_sass = require('node-sass');
const dotenv = require('dotenv');
const moment = require('moment');
const jsonwebtoken = require('jsonwebtoken');
const bluebird = require('bluebird');
const cors = require('cors');

// Get the gas limit for a transaction
web3.eth.getBlock('latest').then(block => {
  console.log('Gas limit:', block.gasLimit);
}).catch(err => {
  console.error('Error getting gas limit:', err);
});

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));

const os = require('os');
console.log('System uptime:', os.uptime(), 'seconds');

console.log(`The current user is ${process.env.USER}`);

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

const fs = require('fs');
fs.readFile('config.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const data = JSON.parse(jsonString);
        console.log("Server name is", data.serverName);
    } catch(err) {
        console.log('Error parsing JSON:', err);
    }
});

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

// Listen for new blocks mined on the Ethereum network
web3.eth.subscribe('newBlockHeaders', (err, block) => {
  if (!err) {
    console.log('New block:', block);
  } else {
    console.error('Error subscribing to new blocks:', err);
  }
});