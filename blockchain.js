const crypto = require("crypto");

function Blockchain() {
    this.chain = [];
    this.newTransaction = [];
    this.createNewBlock(100, "0", "0");
}

Blockchain.prototype.createNewBlock = function (nonce, previousHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransaction,
        nonce,
        hash,
        previousHash,
    };
    this.newTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
    amount,
    sender,
    recipient
) {
    const newTransactions = {
        amount,
        sender,
        recipient,
    };
    this.newTransactions.push(this.newTransaction);
    return this.getLastBlock()["index"] + 1;
};

Blockchain.prototype.hashBlock = function (
    previousHashBlock,
    currentBlockData,
    nonce
) {
    const dataAsString =
        previousHashBlock + nonce.toString() + JSON.stringify(currentBlockData);

    const hash = crypto
        .createHash("sha256")
        .update(dataAsString)
        .digest("base64");

    return hash;
};

Blockchain.prototype.proofOfWork = function (
    previousHashBlock,
    currentBlockData
) {
    let nonce = 0;
    let hash = this.hashBlock(previousHashBlock, currentBlockData, nonce);
    while (hash.substring(0, 4) !== "0000") {
        ++nonce;
        hash = this.hashBlock(previousHashBlock, currentBlockData, nonce);
    }

    return nonce;
};

module.exports = Blockchain;
