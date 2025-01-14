// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";
import {ethers} from "ethers";
import DaiV2 from "./DaiV2.json" with { type: "json" };

const config = {
  apiKey: "ad-zt8gHkms2xBPzsrRNS5b3wU1ez33E", // Replace with your API key
  network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

// Example of using the call method
const main = async () => {
  //Initialize a variable for the transaction object
  //   let tx = {
  //     to: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
  //     gas: "0x76c0",
  //     gasPrice: "0x9184e72a000",
  //     data: "0x3b3b57debf074faa138b72c65adbdcfb329847e4f2c04bde7f7dd7fcad5a52d2f395a558",
  //   };
  //   let response = await alchemy.core.call(tx);
  //   //Logging the response to the console
  //   console.log(response);

  // The address of the DAI token contract
  const dai = "0x6b175474e89094c44da98b954eedeac495271d0f";

  
  // The address of the sender
  const fromAddr = "0x80787af194C33b74a811f5e5c549316269d7Ee1A";

  // The address of the recipient
  const toAddr = "0x6b175474e89094c44da98b954eedeac495271d0f";

  // The allowance slot on the DAI contract (this may differ from contract to contract)
  const slot = 3;

  // Use the solidityKeccak256 function from the ethers.js library to calculate the index for the allowance mapping
  const temp = ethers.utils.solidityKeccak256(
    ["uint256", "uint256"],
    [fromAddr, slot]
  );
  const index = ethers.utils.solidityKeccak256(
    ["uint256", "uint256"],
    [toAddr, temp]
  );

  // const bytecode = DaiV2.bytecode.startsWith("0x") ? DaiV2.bytecode : `0x${DaiV2.bytecode}`;

  // The stateDiff object to mock an approval
  const stateDiff = {
    [ethers.utils.hexValue(fromAddr)]: {
      // stateDiff: {
        balance: ethers.constants.MaxUint256.toHexString(),
      // },
    },
    [ethers.utils.hexValue(dai)]: {
      // stateDiff: {
        [ethers.utils.hexValue(fromAddr)]: {
          balance: ethers.utils.parseEther("1000000").toHexString(),
        },
        [index]: ethers.constants.MaxUint256.toHexString(), // setting the allowance to the max value of uint256
        code: DaiV2.bytecode,
      // },
    },
  };

  // Create an instance of the Ethereum provider
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/ad-zt8gHkms2xBPzsrRNS5b3wU1ez33E"
  );

  /*
  Call data 

  
  */
  // The parameters for the eth_call method
  const callParams = [
    {
      to: dai,
      data: "0xa9059cbb0000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000000000000000000000000000000de0b6b3a7640000", // The method signature and arguments for the call
    },
    "latest",
    { ...stateDiff },
  ];

  // Call the contract method without state overrides
  // const call1 = await provider.send("eth_call", callParams);

  // Call the contract method with state overrides
  // console.log('====================================');
  // console.log("stateDiff:\n", JSON.stringify(stateDiff, null, 2));
  // console.log('====================================');

  // console.log("callParams:\n", JSON.stringify(callParams, null, 2));
  // console.log('====================================');
  const call2 = await provider.send("eth_call", callParams);
  // Log the results of both calls
  // console.log(call1);
  console.log(call2);

  let logs = await alchemy.core.getLogs({
    address: dai,
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x38c86d66eced6d3d9d17ad8c16f3cb480bf264e5d3dceaa90e782bd87bfce928",
    ],
    // topics:null
  });
  console.log('====================================');
  console.log(logs);
  console.log('====================================');
};

main();
