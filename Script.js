// script.js

let web3;
let userAddress;

// Replace these with your actual contract ABI and address
const CONTRACT_ABI = [
  // Example ABI for claiming airdrop function
  {
    "constant": false,
    "inputs": [
      {
        "name": "walletAddress",
        "type": "address"
      }
    ],
    "name": "claimAirdrop",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const CONTRACT_ADDRESS = "0xcc72a52F8BBC9510eD3890dBd8Ade0b00FcBD0C3";

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById('status').innerText = 'Wallet Connected: ' + userAddress;
    } catch (error) {
      document.getElementById('status').innerText = 'Connection Failed!';
    }
  } else {
    document.getElementById('status').innerText = 'No Wallet Detected!';
  }
}

async function claimAirdrop() {
  const walletAddress = document.getElementById('walletAddress').value;
  if (!userAddress || !walletAddress) {
    document.getElementById('status').innerText = 'Please connect your wallet and provide an address.';
    return;
  }
  
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  try {
    await contract.methods.claimAirdrop(walletAddress).send({ from: userAddress });
    document.getElementById('status').innerText = 'Airdrop claimed for: ' + walletAddress;
  } catch (error) {
    console.error(error);
    document.getElementById('status').innerText = 'Claim Failed!';
  }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
document.getElementById('claimAirdrop').addEventListener('click', claimAirdrop);
