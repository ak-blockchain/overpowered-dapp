
const serverUrl = "https://msbsejcr97ct.usemoralis.com:2053/server";
const appId = "b8h417TrHPsmSiWzVY4HsaBgoWO5SMl9Rs0T5CIx";

const DECIMALS = 5;
const contractAddress = "0xd51CB10cc1607e86A5def54EE3bE806A7df8528b";
const pairAddress = "0xC39B991A42A961eEB390059a82A337D84e68afB7";

var userAddress; 
var ethers; 
var mainContract; 

var days = 1; 

let sharedValues = {
	price: 0,
	yourBalance: 0,
	apy: 400977
}

Moralis.start({ serverUrl, appId });

function linkButtons() {
    document.getElementById("walletCircle").onclick = loginManual;
    document.getElementById("copyToken").onclick = copyToken;
    document.getElementById("copyPair").onclick = copyPair;

    document.getElementById("btn_docs").onclick = goToPage;

	document.getElementById("btn_account").onclick = enterAccount;
	document.getElementById("btn_menu").onclick = enterHomepage;
	document.getElementById("btn_calc").onclick = enterCalculator;
}

function copyToken() {
    document.getElementById("tokenClipboard").style = "visibility: hidden";
    document.getElementById("tokenTick").style = "visibility: visible";

    setTimeout(function(){ 
        document.getElementById("tokenClipboard").style = "visibility: visible";
        document.getElementById("tokenTick").style = "visibility: hidden";
     }, 500);
     navigator.clipboard.writeText(contractAddress);
}

function copyPair() {
    document.getElementById("pairClipboard").style = "visibility: hidden";
    document.getElementById("pairTick").style = "visibility: visible";

    setTimeout(function(){ 
        document.getElementById("pairClipboard").style = "visibility: visible";
        document.getElementById("pairTick").style = "visibility: hidden";
     }, 500);
     navigator.clipboard.writeText(pairAddress);
}

function goToPage() {
    window.open(
        "https://overpowered.finance", "_blank");
}

function beautifyAddress(address, first) {
    return address.slice(0, first)+"..."+address.slice(-3);
}

function updateUserAddress(ethAddress) {
    userAddress = ethAddress;
    document.getElementById("usersWallet").innerHTML = beautifyAddress(ethAddress,5);
   // beautifyAddress(ethAddress,5);
}

async function loginManual() {
   await logOut();
   await login();
}

async function login() {
    provider = await Moralis.enableWeb3();
    ethers = Moralis.web3Library; 

    const newChainId = "0x38"; //BSC Mainnet
    await Moralis.switchNetwork(newChainId); 
    
   let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.Web3.authenticate({signingMessage: "Requesting permission to read account balances"});
    }
    updateUserAddress(user.attributes.ethAddress);
    getStats();
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
 
async function getStats() {
    var contract = await new ethers.Contract(contractAddress, abi, provider);
	let circulatingSupply = await contract.getCirculatingSupply();

	const priceOptions = {
		address: contractAddress,
		chain: "bsc",
		exchange: "PancakeSwapv2",
	  };
	  const price = await Moralis.Web3API.token.getTokenPrice(priceOptions);
    //await getRewards();
	//console.log(price);
	
	let treasuryReceiver = await contract.treasuryReceiver();
	let treasuryBalance = await contract.balanceOf(treasuryReceiver);
	let valueOfTreasury = treasuryBalance*price.usdPrice; 
	let marketCap = circulatingSupply/(10**5)*price.usdPrice;

	let firePit = await contract.thunderDome();
	let firePitBalance = await contract.balanceOf(firePit);
	let valueOfFirePit = firePitBalance*price.usdPrice; 

	let pair = await contract.pair();
	const lpOptions = {
		pair_address: pair,
		chain: "bsc",
	};

	const LPReserves = await Moralis.Web3API.defi.getPairReserves(lpOptions);
	const BNBReserves = LPReserves['reserve0'];
	
	sharedValues['price'] = price.usdPrice.toFixed(2);

	updateFrontend(
		circulatingSupply,
		valueOfTreasury/(10**5),
		marketCap,
		firePitBalance/(10**5),
		valueOfFirePit/(10**5),
		(firePitBalance/circulatingSupply*100).toFixed(2),
		(BNBReserves/(10**18)*380).toFixed(0)
		);
		setupCountdown();
	updateCalcFrontend()

}


function setupCountdown() {
	
	var coeff = 1000 * 60 * 15;
	var countDownDate = new Date();
	countDownDate = new Date(Math.round(countDownDate.getTime() / coeff) * coeff+coeff)

	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();
	  
		// Find the distance between now and the count down date
		var distance = countDownDate - now;
	  
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  
		// Display the result in the element with id="demo"
		rebaseElements = document.getElementsByClassName("rebaseCountdown");
		console.log("rebase"+rebaseElements)
		for(var i=0; i<rebaseElements.length; i++) {
			rebaseElements[i].innerHTML = "00" + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
		}
	  
		// If the count down is finished, write some text
		if (distance < 0) {
		  setupCountdown();
		}
	  }, 1000);
}

/*
async function getRewards() {
    const Reffered = Moralis.Object.extend("ReferralBonus");
    const query = new Moralis.Query(Reffered);
    query.equalTo("feesTo",userAddress);
    const results = await query.find();
    referredInfoPresentable = [];
    var sum = 0;
    for(i in results) {
        let attributes = results[i]["attributes"];
    
        
        //todo: get the quantity from the event directly 
        value = parseInt(attributes["value"])/(10**DECIMALS)
        sum+=value;
        referredInfoPresentable.push([
            attributes["feesFrom"],
            beautifyAddress(attributes["feesFrom"],5),
            value*20, 
            value,
            attributes["transaction_hash"]
        ])
    }
    updateRewards(sum);
}*/

function updateFrontend(circulatingSupply,treasuryValue,marketCap, firePitBalance, valueOfFirePit, percentageFirePit, LPValue) {
	document.getElementById("circulatingSupply").innerHTML = circulatingSupply;
	document.getElementById("tokenPrice").innerHTML = "$"+sharedValues['price'];
	document.getElementById("treasuryValue").innerHTML = "$"+treasuryValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("marketCap").innerHTML =  "$"+marketCap.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("firePitBalance").innerHTML = firePitBalance.toFixed(0);
	document.getElementById("firePitValue").innerHTML = "$"+valueOfFirePit.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("percentFirePit").innerHTML = percentageFirePit+"%"
	document.getElementById("poolValue").innerHTML = "$"+LPValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


async function getTokenBalance() {
    const options = { chain: 'bsc', address: "0xd51CB10cc1607e86A5def54EE3bE806A7df8528b"}
    const balances = await Moralis.Web3API.account.getTokenBalances(options);
}


function enterHomepage() {
	document.getElementById("homepage").style = "display: block;"
	document.getElementById("account").style = "display: none;"
	document.getElementById("calculator").style = "display: none;"

	
	document.getElementById("btn_menu").className = "menuButton menuButton_selected";
	document.getElementById("btn_account").className = "menuButton menuButton_clickable";
	document.getElementById("btn_calc").className =  "menuButton menuButton_clickable";

	login(); 
}

function enterAccount() {
	document.getElementById("homepage").style = "display: none;"
	document.getElementById("account").style = "display: block;"
	document.getElementById("calculator").style = "display: none;"


	document.getElementById("btn_menu").className =  "menuButton menuButton_clickable";
	document.getElementById("btn_account").className = "menuButton menuButton_selected";
	document.getElementById("btn_calc").className =  "menuButton menuButton_clickable";

	setupCountdown();
	getAccountStats();
	
}

function enterCalculator() {
	document.getElementById("homepage").style = "display: none;"
	document.getElementById("account").style = "display: none;"
	document.getElementById("calculator").style = "display: block;"

	document.getElementById("btn_menu").className =  "menuButton menuButton_clickable";
	document.getElementById("btn_account").className = "menuButton menuButton_clickable";
	document.getElementById("btn_calc").className =  "menuButton menuButton_selected";
	updateCalcFrontend(); 
	updateSlider(1);
}


async function getAccountStats() {
	var contract = await new ethers.Contract(contractAddress, abi, provider);
    let tokenBalance = await contract.balanceOf(userAddress);
	let nextRewardAmount = 0.000235*tokenBalance;
	let nextRewardUSD = nextRewardAmount*parseFloat(sharedValues["price"]);
	sharedValues['yourBalance'] = parseFloat(tokenBalance)/(10**5); 
	updateAccountFrontend(tokenBalance,nextRewardAmount, nextRewardUSD);
}

function updateAccountFrontend(tokenBalance,nextRewardAmount, nextRewardUSD) {
	document.getElementById("yourBalance").innerHTML = parseFloat(tokenBalance)/(10**DECIMALS);  
	document.getElementById("accountPrice").innerHTML = "$"+sharedValues['price']
	document.getElementById("accountNextReward").innerHTML = parseFloat(nextRewardAmount)/(10**5);
	document.getElementById("accountNextUSD").innerHTML = "$"+parseFloat(nextRewardUSD)/(10**5);;
}

function updateCalcFrontend() {
	document.getElementById("calcPrice").innerHTML = "$"+sharedValues['price'];
	document.getElementById("calcAPY").innerHTML = sharedValues['apy']+"%";
	document.getElementById("calcBalance").innerHTML = sharedValues['yourBalance'];
	document.getElementById("tokenPriceInput").value = ""+sharedValues['price'];
	document.getElementById("tokenPriceFutureInput").value = ""+sharedValues['price'];
	document.getElementById("tokenAmountInput").value = ""+Math.max(10,sharedValues['yourBalance']);

}

function updateSlider(value) {
	if(value != -1) {
		days = ((value*3.68).toFixed(0)-3);
	}
	document.getElementById("selectedRange").innerHTML = days+" days";
	let tokens = document.getElementById("tokenAmountInput").value;
	let apy = document.getElementById("apyInput").value;
	let initialPrice = document.getElementById("tokenPriceInput").value;
	let futurePrice = document.getElementById("tokenPriceFutureInput").value; 

	document.getElementById("calc_initial").innerHTML = "$"+(tokens*initialPrice).toFixed(2);
	let futureTokens = tokens*(1.0228**days)
	document.getElementById("calc_rewards").innerHTML = futureTokens.toFixed(2);
	document.getElementById("calc_return").innerHTML = "$"+(futureTokens*futurePrice - tokens*initialPrice).toFixed(2); 
}

function maxAmount() {
	document.getElementById("tokenAmountInput").value = sharedValues['yourBalance'];
}
function currentAPY() {
	document.getElementById("apyInput").value = sharedValues['apy']+"%";
}
function currentPrice() {
	document.getElementById("tokenPriceInput").value = ""+sharedValues['price'];
}
function currentFuture() {
	document.getElementById("tokenPriceFutureInput").value = ""+sharedValues['price'];
}
linkButtons();
enterHomepage();

const abi = [
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
				"internalType": "uint256",
				"name": "epoch",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			}
		],
		"name": "LogRebase",
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
			}
		],
		"name": "OwnershipRenounced",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manualSync",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "setAutoAddLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "setAutoRebase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_botAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_flag",
				"type": "bool"
			}
		],
		"name": "setBotBlacklist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_autoLiquidityReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_treasuryReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_opInsuranceFundReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_thunderDome",
				"type": "address"
			}
		],
		"name": "setFeeReceivers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setLP",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pairAddress",
				"type": "address"
			}
		],
		"name": "setPairAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_addr",
				"type": "address[]"
			}
		],
		"name": "setWhitelistMultiple",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
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
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
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
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "withdrawAllToTreasury",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "_autoAddLiquidity",
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
		"name": "_autoRebase",
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
		"name": "_decimals",
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
		"inputs": [],
		"name": "_initRebaseStartTime",
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
		"name": "_lastAddLiquidityTime",
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
		"name": "_lastRebasedTime",
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
		"name": "_name",
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
		"name": "_symbol",
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
		"name": "_totalSupply",
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
				"name": "owner_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
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
		"inputs": [],
		"name": "autoLiquidityReceiver",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "blacklist",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "checkFeeExempt",
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
		"inputs": [],
		"name": "DECIMALS",
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
		"name": "feeDenominator",
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
		"name": "getCirculatingSupply",
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
				"name": "accuracy",
				"type": "uint256"
			}
		],
		"name": "getLiquidityBacking",
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
		"name": "isNotInSwap",
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
		"name": "isOwner",
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
		"name": "liquidityFee",
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
		"name": "MAX_UINT256",
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
		"name": "opInsuranceFundFee",
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
		"name": "opInsuranceFundReceiver",
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
		"name": "pair",
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
		"name": "pairAddress",
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
		"name": "pairContract",
		"outputs": [
			{
				"internalType": "contract IPancakeSwapPair",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RATE_DECIMALS",
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
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "contract IPancakeSwapRouter",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellFee",
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
		"name": "swapEnabled",
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
		"name": "thunderDome",
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
		"name": "thunderDomeFee",
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
		"name": "totalFee",
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
		"inputs": [],
		"name": "treasuryFee",
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
		"name": "treasuryReceiver",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
