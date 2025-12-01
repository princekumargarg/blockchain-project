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

