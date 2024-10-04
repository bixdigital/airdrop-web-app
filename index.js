// Import Thirdweb SDK
const { ThirdwebSDK } = require("@thirdweb-dev/sdk");
const { ethers } = require("ethers");

// Create a provider and signer
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
const signer = ethers.Wallet.fromMnemonic("YOUR_MNEMONIC_HERE").connect(provider); // Replace with your wallet's mnemonic

// Create the Thirdweb SDK instance
const sdk = new ThirdwebSDK(signer);

// Connect to your contract
const contract = sdk.getContract("0xcc72a52F8BBC9510eD3890dBd8Ade0b00FcBD0C3"); // Your contract address

// Example function to interact with the contract
async function interactWithContract() {
  try {
    // Example: Get the name of the token
    const tokenName = await contract.call("name");
    console.log("Token Name:", tokenName);

    // Example: Get the total supply of the token
    const totalSupply = await contract.call("totalSupply");
    console.log("Total Supply:", totalSupply.toString());
  } catch (error) {
    console.error("Error interacting with contract:", error);
  }
}

// Call the example function to test
interactWithContract();
