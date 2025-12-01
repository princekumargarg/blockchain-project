import mongoose from "mongoose";
const CounterTxSchema = new mongoose.Schema({
  type: { type: String, required: true },       // "inc" or "incBy"
  value: { type: Number, required: true },      // increment value
  txHash: { type: String, required: true },
  blockNumber: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const CounterTx = mongoose.model("CounterTx", CounterTxSchema);

export default CounterTx;