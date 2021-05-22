const { TransactionProcessor } = require('sawtooth-sdk/processor');
const VotingSystemHandler = require('./handler');
const address = process.argv[2]
const transactionProcessor = new TransactionProcessor(address);

transactionProcessor.addHandler(new VotingSystemHandler());
transactionProcessor.start();

console.log(`Welcome to Voting system`);
console.log(`Connecting to Sawtooth validator at Validator 0`);
