// Import ethers from hardhat package
const { ethers } = require("hardhat");
async function main() {
    const nftContract = await ethers.getContractFactory("GameItem");
    const deployednftContract = await nftContract.deploy();
    console.log("NFT Contract Address", deployednftContract.address)
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})