# Voting system using Sawtooth
### Requirements
 - Docker (https://www.docker.com/products/docker-desktop)
 - Node js and NPM (https://nodejs.org/en/)
### Project setup
 - Open a console and run the following commands
 - Get into all three folder(client, tp, explorer) and run `npm install` 
 - In the tp directory, run `docker build -t voting-tp .`
 - In the root directory, run `docker-compose -f filename.yaml up` 
 - Now docker will start spinning up the containers and create a sawtooth test network
### Submit transactions
Open a terminal in the client directory and run the following commands.

> adding parties

node sendRequest.js "{"action":"addParty", "partyId":"A"}"

node sendRequest.js "{"action":"addParty", "partyId":"B"}"

> adding voters

node sendRequest.js "{"action":"addVoter", "voterId":"1"}"

node sendRequest.js "{"action":"addVoter", "voterId":"2"}"

node sendRequest.js "{"action":"addVoter", "voterId":"3"}"

> voting from id 1 to party A

node sendRequest.js "{"action":"addVote", "partyId":"A", "voterId":"1"}"

All the submitted transactions will be validated and only the valid ones will get committed. To view the details stored in the network, get into explorer directory and run `node index.js`
You can also use the endpoints given in REST API to explore the blockchain data.

### Useful links

 1. https://sawtooth.hyperledger.org/docs/core/releases/1.0/introduction.html
 2. https://sawtooth.hyperledger.org/docs/core/nightly/1-2/app_developers_guide.html
 3. https://sawtooth.hyperledger.org/docs/core/releases/1.0/api_references.html
