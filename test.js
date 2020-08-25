const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "0INAISDFNTRIVTYRVTIYRTCYRCTYRVTIRCTYRCYTI";
const currentBlockData = [
    {
        amount: 101,
        sender: "SENDERSENDER",
        recepient: "MR.RECEPIENT",
    },
    {
        amount: 55,
        sender: "SENDERSENDER2",
        recepient: "MRS.RECEPIENT",
    },
    {
        amount: 200,
        sender: "SENDERSENDER3",
        recepient: "DR.RECEPIENT",
    },
];

bitcoin.createNewTransaction(420, "SENDERSENDER4", "ER.RECEPIENT");
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 4996790));
console.log(
    "Proof of Work:",
    bitcoin.proofOfWork(previousBlockHash, currentBlockData)
);

// console.log(bitcoin);
