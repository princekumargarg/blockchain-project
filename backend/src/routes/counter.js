import { Router } from "express";
import { inc, incBy, getTransactions } from "../services/counterService.js";

const router = Router();

router.post("/inc", async (req, res) => {
    const tx = await inc();
    res.json(tx);
});

router.post("/incBy", async (req, res) => {
    const { value } = req.body;
    const tx = await incBy(value);
    res.json(tx);
});

router.get("/transactions", async (req, res) => {
    const txs = await getTransactions();
    res.json(txs);
});

export default router;
