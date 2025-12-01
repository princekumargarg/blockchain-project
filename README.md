# Backend - Blockchain Developer Assessment

- **Solidity Smart Contract**
- **Hardhat v3**
- **Testnet / Localnet Deployment**
- **Node.js + TypeScript Backend**
- **MongoDB for storing contract interactions**
- **Event Listener syncing blockchain events to DB**

---

## 📌 Features

### 🔹 Smart Contract (Solidity)
- Counter contract with:
  - `inc()` function
  - `incBy(uint)` function
  - `Increment(uint value)` event

### 🔹 Backend (Node.js + Express + TypeScript)
- POST API: Call smart contract functions (`inc`, `incBy`)
- GET API: Fetch transaction history from MongoDB
- Stores:
  - increment value  
  - txHash  
  - block number  
  - timestamp  

### 🔹 Blockchain Event Listener
- Watches `Increment` event in real time
- Saves event data automatically into MongoDB

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Smart Contract | Solidity 0.8.x |
| Blockchain Tools | Hardhat v3 |
| Backend | Node.js, Express, TypeScript |
| DB | MongoDB |
| Blockchain Interaction | ethers.js v6 |
| Deployment | Hardhat Ignition |
| Event Listener | ethers.js listener |

---
 # 🧪 Deployment (Local Hardhat Network)

Start hardhat local chain:

npx hardhat node


Deploy contract:

npx hardhat run scripts/deploy.ts --network localhost


Contract artifacts are stored at:

ignition/deployments/chain-31337/artifacts/CounterModule#Counter.json

🔧 Backend Setup
1️⃣ Move into backend folder
cd backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/counterdb
RPC_URL=http://127.0.0.1:8545
PRIVATE_KEY=0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
CONTRACT_ADDRESS=0x73511669fd4de447fed18bb79bafeac93ab7f31f
ABI_PATH=../ignition/deployments/chain-31337/artifacts/CounterModule#Counter.json

4️⃣ Run Backend
 `npx ts-node src/server.ts`

#📡 API Endpoints (Express)
1️⃣ Increment by 1

POST /api/counter/inc

Response

{
  "type": "inc",
  "value": 1,
  "txHash": "...",
  "blockNumber": 12345
}

2️⃣ Increment by value

POST /api/counter/incBy

Body:

{
  "value": 10
}

3️⃣ Get transaction history

GET /api/counter/history


-----------------
 # 🛰️ Event Listener

✔ Connects to RPC
✔ Loads ABI from Ignition folder
✔ Watches for Increment events
✔ Stores events into MongoDB
