/* 
Filename: ComplexCode.js
Content: Sophisticated and elaborate code demonstrating the implementation of a blockchain using JavaScript.
*/

// Class to represent a single block in the blockchain
class Block {
    constructor(timestamp, data, previousHash) {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.timestamp + this.data + this.previousHash + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}

// Class to represent the blockchain
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block("01/01/2022", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

// Create a new blockchain
const myBlockchain = new Blockchain();

console.log("Mining block 1...");
myBlockchain.addBlock(new Block("01/02/2022", { amount: 4 }));

console.log("Mining block 2...");
myBlockchain.addBlock(new Block("01/03/2022", { amount: 8 }));

// Check if the blockchain is valid
console.log("Is blockchain valid? " + myBlockchain.isChainValid());

// Tampering with the blockchain (Example of security measures)
myBlockchain.chain[1].data = { amount: 100 };
myBlockchain.chain[1].hash = myBlockchain.chain[1].calculateHash();

// Check again if the blockchain is valid after tampering
console.log("Is blockchain valid after tampering? " + myBlockchain.isChainValid());