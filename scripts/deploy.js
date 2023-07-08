const { ethers } = require("hardhat");

async function main() {
  // Compile the contract
  const AlmaCoin = await ethers.deployContract("AlmaCoin",["Alma Coin",
  "ABC",
  18,
  ethers.parseEther("10000")]);
  // const almaCoin = await AlmaCoin.deploy(
  //   "Alma Coin",
  //   "ABC",
  //   18,
  //   ethers.parseEther("10000")
  // );

  await AlmaCoin.waitForDeployment();

  console.log("Token deployed to:", await AlmaCoin.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
