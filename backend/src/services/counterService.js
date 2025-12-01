import { ethers } from "ethers";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import CounterTx from "../models/CounterTx.js";
dotenv.config();
const ABI_PATH = path.resolve(
    process.cwd(),
    "../ignition/deployments/chain-31337/artifacts/CounterModule#Counter.json"
);





const CounterABI = JSON.parse(fs.readFileSync(ABI_PATH, "utf8"));

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const counter = new ethers.Contract(CONTRACT_ADDRESS, CounterABI.abi, wallet);


export async function inc() {
    const tx = await counter.inc();
    const receipt = await tx.wait();

    await CounterTx.create({
        type: "inc",
        value: 1,
        txHash: receipt.hash,
        blockNumber: receipt.blockNumber,
        timestamp: new Date(),
    });

    return receipt;
}

export async function incBy(value) {
    const tx = await counter.incBy(value);
    const receipt = await tx.wait();

    await CounterTx.create({
        type: "incBy",
        value,
        txHash: receipt.hash,
        blockNumber: receipt.blockNumber,
        timestamp: new Date(),
    });

    return receipt;
}

export async function getTransactions() {
    return CounterTx.find().sort({ blockNumber: -1 });
}
