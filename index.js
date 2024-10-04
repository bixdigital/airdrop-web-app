// Import necessary functions from Thirdweb SDK
import { createThirdwebClient, getContract } from "@thirdweb-dev/sdk";
import { defineChain } from "@thirdweb-dev/chains";

// Create the Thirdweb client with your Client ID
const client = createThirdwebClient({
  clientId: "e40303291e646f0d1171a326c0b887d1", // Your actual Client ID
});

// Connect to your contract
const contract = getContract({
  client,
  chain: defineChain(56), // Chain ID for Binance Smart Chain (BSC)
  address: "0xcc72a52F8BBC9510eD3890dBd8Ade0b00FcBD0C3", // Your contract address
});

// Example function to interact with the contract
async function interactWithContract() {
  try {
    // Example: Get the name of the token
    const tokenName = await contract.call("name");
    console.log("Token Name:", tokenName);

    // Example: Get the total supply of the token
    const totalSupply = await contract.call("totalSupply");
    console.log("Total Supply:", totalSupply.toString());

    // Example: Other contract interactions can be added here
  } catch (error) {
    console.error("Error interacting with contract:", error);
  }
}

// Call the example function to test
interactWithContract();

