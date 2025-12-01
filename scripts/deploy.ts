import hre from "hardhat";
import CounterModule from "../ignition/modules/Counter.js";

async function main() {
    const connection = await hre.network.connect();
    const { counter } = await connection.ignition.deploy(CounterModule);

    const tx = await counter.incBy(5);
    await tx.wait();

    const currentValue = await counter.x();
    console.log(`Current counter value: ${currentValue}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
