const claimAitContract = '0x7F91716B7661583FAB196D51B210df394F7d0f93';
const tokenMom = '0xbBb017586E75C465Cc52cBE4c6b2B71d4baED5c6'
const claimAitContractABI = [
    {
        "inputs": [],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FeeReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "setClaimFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "setTokenAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalToken",
                "type": "uint256"
            }
        ],
        "name": "TotalTokenUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "claimFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalClaimableTokens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalClaimers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hasClaimed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalClaimers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const momABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let web3;
let claimContract;
let momContract;
let accounts = [];

async function switchOrAddChain(chainId) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId,
                        chainName: 'TEA-Sepolia',
                        nativeCurrency: {
                            name: 'TEA',
                            symbol: 'TEA',
                            decimals: 18
                        },
                        rpcUrls: ['https://tea-sepolia.g.alchemy.com/public'],
                        blockExplorerUrls: []
                    }],
                });
            } catch (addError) {
                console.error('Failed to add TEA-Sepolia network:', addError);
                throw addError;
            }
        } else {
            console.error('Failed to switch to TEA-Sepolia network:', switchError);
            throw switchError;
        }
    }
}

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        try {
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            const TEA_SEPOLIA_CHAIN_ID = '0x27ea';

            if (chainId !== TEA_SEPOLIA_CHAIN_ID) {
                await switchOrAddChain(TEA_SEPOLIA_CHAIN_ID);
                return;
            }

            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }

            await initializeWeb3();
            await updateConnectButton(accounts[0]);
            await updateAllData();

        } catch (error) {
            console.error('Initialization failed:', error);
            alert('Initialization failed: ' + error.message);
        }
    } else {
        console.error('MetaMask is not installed!');
        alert('Please install MetaMask to use this dApp!');
    }
}

async function updateAllData() {
    try {
        await Promise.all([
            updateAccountBalance(),
            updateMomBalance(),
            updateTotalMommycoin(),
            updateTotalClaimed(),
            checkClaimStatus()
        ]);
    } catch (error) {
        console.error('Failed to update some data:', error);
    }
}

function updateConnectButton(account) {
    const connectBtn = document.getElementById('connectButton');
    if (connectBtn) {
        connectBtn.textContent = `${account.substring(0, 5)}...${account.substring(account.length - 5)}`;
        connectBtn.classList.remove('bg-blue-500');
        connectBtn.classList.add('bg-green-500', 'hover:bg-green-700');
    }
}

async function initializeWeb3() {
    web3 = new Web3(window.ethereum);
    claimContract = new web3.eth.Contract(claimAitContractABI, claimAitContract);
    momContract = new web3.eth.Contract(momABI, tokenMom);
}

async function updateAccountBalance() {
    if (!accounts.length) return;

    const balanceElement = document.getElementById('balance');
    if (balanceElement) {
        try {
            const ethBalance = await web3.eth.getBalance(accounts[0]);
            const formattedEthBalance = web3.utils.fromWei(ethBalance, 'ether');
            balanceElement.textContent = parseFloat(formattedEthBalance).toFixed(2);
        } catch (error) {
            console.error("Error fetching balance:", error);
            balanceElement.textContent = "Error";
        }
    }
}

async function updateMomBalance() {
    if (!accounts.length) return;

    const momBalanceElement = document.getElementById('balanceMom');
    if (momBalanceElement) {
        try {
            const momBalance = await momContract.methods.balanceOf(accounts[0]).call();
            const formattedMomBalance = web3.utils.fromWei(momBalance, 'ether');
            momBalanceElement.textContent = parseFloat(formattedMomBalance).toFixed(0);
        } catch (error) {
            console.error("Error fetching MOM balance:", error);
            momBalanceElement.textContent = "Error";
        }
    }
}

async function updateTotalMommycoin() {
    try {
        const totalTokens = await claimContract.methods.getTotalClaimableTokens().call();
        const formattedTotal = web3.utils.fromWei(totalTokens, 'ether');

        const totalElement = document.getElementById('totalMommycoin');
        if (totalElement) {
            totalElement.textContent = parseFloat(formattedTotal).toFixed(0);
        }
    } catch (error) {
        console.error("Error fetching total mommycoin:", error);
        const totalElement = document.getElementById('totalMommycoin');
        if (totalElement) {
            totalElement.textContent = "Error";
        }
    }
}

async function updateTotalClaimed() {
    try {
        const totalClaimers = await claimContract.methods.getTotalClaimers().call();

        const claimedElement = document.getElementById('userClaimed');
        if (claimedElement) {
            claimedElement.textContent = totalClaimers;
        }
    } catch (error) {
        console.error("Error fetching total claimers:", error);
        const claimedElement = document.getElementById('userClaimed');
        if (claimedElement) {
            claimedElement.textContent = "Error";
        }
    }
}

async function claimTokens() {
    const claimButton = document.getElementById('claim');
    if (!claimButton) return;

    try {
        if (!accounts.length) {
            await init();
            if (!accounts.length) return;
        }

        const hasClaimed = await claimContract.methods.hasClaimed(accounts[0]).call();
        if (hasClaimed) {
            alert("You have already claimed your $MOM tokens!");
            return;
        }

        claimButton.disabled = true;
        claimButton.textContent = "Processing...";

        const gasEstimate = await claimContract.methods.claimTokens()
            .estimateGas({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });

        const result = await claimContract.methods.claimTokens().send({
            from: accounts[0],
            value: web3.utils.toWei('1', 'ether'),
            gas: Math.floor(gasEstimate * 1.2) 
        });

        console.log("Claim successful:", result);

        await updateAllData();

        alert("Successfully claimed 1000 $MOM!");
    } catch (error) {
        console.error("Claim failed:", error);

        if (error.code === 4001) {
            alert("Claim canceled by user");
        } else if (error.message.includes("already claimed")) {
            alert("You have already claimed your $MOM tokens!");
        } else if (error.message.includes("insufficient funds")) {
            alert("You don't have enough TEA to pay the claim fee");
        } else {
            alert("Claim failed: " + (error.message || "See console for details"));
        }
    } finally {
        claimButton.disabled = false;
        claimButton.textContent = "CLAIM NOW";
    }
}

async function checkClaimStatus() {
    if (!accounts.length) return;

    try {
        const hasClaimed = await claimContract.methods.hasClaimed(accounts[0]).call();
        const claimButton = document.getElementById('claim');
        if (claimButton) {
            if (hasClaimed) {
                claimButton.disabled = true;
                claimButton.textContent = "Already Claimed";
                claimButton.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                claimButton.classList.add('bg-gray-400', 'cursor-not-allowed');
            } else {
                claimButton.disabled = false;
                claimButton.textContent = "CLAIM NOW";
                claimButton.classList.remove('bg-gray-400', 'cursor-not-allowed');
                claimButton.classList.add('bg-purple-600', 'hover:bg-purple-700');
            }
        }
    } catch (error) {
        console.error("Error checking claim status:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.getElementById('claim');
    if (claimButton) {
        claimButton.addEventListener('click', claimTokens);
    }

    const connectButton = document.getElementById('connectButton');
    if (connectButton) {
        connectButton.addEventListener('click', init);
    }
});

window.addEventListener('load', async () => {
    if (window.ethereum) {
        ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });

        ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            if (accounts.length > 0) {
                updateConnectButton(accounts[0]);
                updateAllData();
            } else {
                window.location.reload();
            }
        });

        try {
            await init();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
});
