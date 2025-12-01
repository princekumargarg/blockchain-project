// @ts-nocheck
import CounterTx from "../models/CounterTx.js";

import { CounterABI } from "../../../artifacts/contracts/Counter.sol/Counter.json" with { type: "json" }
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const counter = new ethers.Contract(process.env.CONTRACT_ADDRESS!, CounterABI.abi, provider);

counter.on("Increment", async (by, event) => {
    console.log(`Increment event detected: ${by}`);
    await CounterTx.create({
        type: "event",
        value: Number(by),
        txHash: event.transactionHash,
        blockNumber: event.blockNumber,
        timestamp: new Date(),
    });
});
