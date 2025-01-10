// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";
import ethers from "ethers";

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
  const toAddr = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

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

  // The stateDiff object to mock an approval
  const stateDiff = {
    [dai]: {
      stateDiff: {
        balance: {
          fromAddr: ethers.constants.MaxUint256.toHexString(),
        },
        [index]: ethers.constants.MaxUint256.toHexString(), // setting the allowance to the max value of uint256
      },
      //   CODE-OVERRIDE
      code: "0x608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a9059cbb1161007c578063a9059cbb1461038e578063b753a98c146103be578063bb35783b146103da578063bf353dbb146103f6578063dd62ed3e14610426578063f2d5d56b146104565761014d565b806370a08231146102bc5780637ecebe00146102ec5780638fcbaf0c1461031c57806395d89b41146103385780639c52a7f1146103565780639dc29fac146103725761014d565b806330adf81f1161011557806330adf81f1461020c578063313ce5671461022a5780633644e5151461024857806340c10f191461026657806354fd4d501461028257806365fae35e146102a05761014d565b806306fdde0314610152578063095ea7b3146101705780630d8e6e2c146101a057806318160ddd146101be57806323b872dd146101dc575b600080fd5b61015a610472565b6040516101679190611da0565b60405180910390f35b61018a60048036038101906101859190611976565b6104ab565b6040516101979190611cc4565b60405180910390f35b6101a861059d565b6040516101b59190611ec2565b60405180910390f35b6101c66105a6565b6040516101d39190611ec2565b60405180910390f35b6101f660048036038101906101f19190611875565b6105ac565b6040516102039190611cc4565b60405180910390f35b6102146105fa565b6040516102219190611cdf565b60405180910390f35b610232610621565b60405161023f9190611edd565b60405180910390f35b610250610626565b60405161025d9190611cdf565b60405180910390f35b610280600480360381019061027b9190611976565b61062c565b005b61028a6107b5565b6040516102979190611da0565b60405180910390f35b6102ba60048036038101906102b59190611810565b6107ee565b005b6102d660048036038101906102d19190611810565b6108e9565b6040516102e39190611ec2565b60405180910390f35b61030660048036038101906103019190611810565b610901565b6040516103139190611ec2565b60405180910390f35b610336600480360381019061033191906118c4565b610919565b005b610340610cce565b60405161034d9190611da0565b60405180910390f35b610370600480360381019061036b9190611810565b610d07565b005b61038c60048036038101906103879190611976565b610e02565b005b6103a860048036038101906103a39190611976565b61122f565b6040516103b59190611cc4565b60405180910390f35b6103d860048036038101906103d39190611976565b611244565b005b6103f460048036038101906103ef9190611875565b611254565b005b610410600480360381019061040b9190611810565b611265565b60405161041d9190611ec2565b60405180910390f35b610440600480360381019061043b9190611839565b61127d565b60405161044d9190611ec2565b60405180910390f35b610470600480360381019061046b9190611976565b6112a2565b005b6040518060400160405280600e81526020017f44616920537461626c65636f696e00000000000000000000000000000000000081525081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161058b9190611ec2565b60405180910390a36001905092915050565b60006002905090565b60015481565b60006105b98484846112b2565b507f38c86d66eced6d3d9d17ad8c16f3cb480bf264e5d3dceaa90e782bd87bfce9286040516105e790611e62565b60405180910390a1600190509392505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb60001b81565b601281565b60055481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146106ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a490611de2565b60405180910390fd5b6106f6600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611761565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061074560015482611761565b6001819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107a99190611ec2565b60405180910390a35050565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690611de2565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60026020528060005260406000206000915090505481565b60046020528060005260406000206000915090505481565b60006005547fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb60001b8a8a8a8a8a60405160200161095c96959493929190611cfa565b60405160208183030381529060405280519060200120604051602001610983929190611c8d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff161415610a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0290611e22565b60405180910390fd5b60018185858560405160008152602001604052604051610a2e9493929190611d5b565b6020604051602081039080840390855afa158015610a50573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614610ac7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abe90611ea2565b60405180910390fd5b6000861480610ad65750854211155b610b15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0c90611dc2565b60405180910390fd5b600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610b659061203b565b919050558714610baa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba190611e02565b60405180910390fd5b600085610bb8576000610bda565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b905080600360008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508873ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610cba9190611ec2565b60405180910390a350505050505050505050565b6040518060400160405280600381526020017f444149000000000000000000000000000000000000000000000000000000000081525081565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f90611de2565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610e84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7b90611e42565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610f5c57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b156111275780600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611020576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101790611e82565b60405180910390fd5b6110a6600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611784565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b611170600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611784565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111bf60015482611784565b600181905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112239190611ec2565b60405180910390a35050565b600061123c3384846105ac565b905092915050565b61124f3383836105ac565b505050565b61125f8383836105ac565b50505050565b60006020528060005260406000206000915090505481565b6003602052816000526040600020602052806000526040600020600091509150505481565b6112ad8233836105ac565b505050565b600081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132d90611e42565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561140e57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b156115d95781600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156114d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c990611e82565b60405180910390fd5b611558600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611784565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b611622600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611784565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116ae600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611761565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161174e9190611ec2565b60405180910390a3600190509392505050565b60008282846117709190611f1f565b915081101561177e57600080fd5b92915050565b60008282846117939190611f75565b91508111156117a157600080fd5b92915050565b6000813590506117b6816120ce565b92915050565b6000813590506117cb816120e5565b92915050565b6000813590506117e0816120fc565b92915050565b6000813590506117f581612113565b92915050565b60008135905061180a8161212a565b92915050565b60006020828403121561182257600080fd5b6000611830848285016117a7565b91505092915050565b6000806040838503121561184c57600080fd5b600061185a858286016117a7565b925050602061186b858286016117a7565b9150509250929050565b60008060006060848603121561188a57600080fd5b6000611898868287016117a7565b93505060206118a9868287016117a7565b92505060406118ba868287016117e6565b9150509250925092565b600080600080600080600080610100898b0312156118e157600080fd5b60006118ef8b828c016117a7565b98505060206119008b828c016117a7565b97505060406119118b828c016117e6565b96505060606119228b828c016117e6565b95505060806119338b828c016117bc565b94505060a06119448b828c016117fb565b93505060c06119558b828c016117d1565b92505060e06119668b828c016117d1565b9150509295985092959890939650565b6000806040838503121561198957600080fd5b6000611997858286016117a7565b92505060206119a8858286016117e6565b9150509250929050565b6119bb81611fa9565b82525050565b6119ca81611fbb565b82525050565b6119d981611fc7565b82525050565b6119f06119eb82611fc7565b612084565b82525050565b6000611a0182611ef8565b611a0b8185611f03565b9350611a1b818560208601612008565b611a24816120bd565b840191505092915050565b6000611a3c601283611f03565b91507f4461692f7065726d69742d6578706972656400000000000000000000000000006000830152602082019050919050565b6000611a7c600283611f14565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000611abc601283611f03565b91507f4461692f6e6f742d617574686f72697a656400000000000000000000000000006000830152602082019050919050565b6000611afc601183611f03565b91507f4461692f696e76616c69642d6e6f6e63650000000000000000000000000000006000830152602082019050919050565b6000611b3c601583611f03565b91507f4461692f696e76616c69642d616464726573732d3000000000000000000000006000830152602082019050919050565b6000611b7c601883611f03565b91507f4461692f696e73756666696369656e742d62616c616e636500000000000000006000830152602082019050919050565b6000611bbc601183611f03565b91507f6275696c646265617220636170747572650000000000000000000000000000006000830152602082019050919050565b6000611bfc601a83611f03565b91507f4461692f696e73756666696369656e742d616c6c6f77616e63650000000000006000830152602082019050919050565b6000611c3c601283611f03565b91507f4461692f696e76616c69642d7065726d697400000000000000000000000000006000830152602082019050919050565b611c7881611ff1565b82525050565b611c8781611ffb565b82525050565b6000611c9882611a6f565b9150611ca482856119df565b602082019150611cb482846119df565b6020820191508190509392505050565b6000602082019050611cd960008301846119c1565b92915050565b6000602082019050611cf460008301846119d0565b92915050565b600060c082019050611d0f60008301896119d0565b611d1c60208301886119b2565b611d2960408301876119b2565b611d366060830186611c6f565b611d436080830185611c6f565b611d5060a08301846119c1565b979650505050505050565b6000608082019050611d7060008301876119d0565b611d7d6020830186611c7e565b611d8a60408301856119d0565b611d9760608301846119d0565b95945050505050565b60006020820190508181036000830152611dba81846119f6565b905092915050565b60006020820190508181036000830152611ddb81611a2f565b9050919050565b60006020820190508181036000830152611dfb81611aaf565b9050919050565b60006020820190508181036000830152611e1b81611aef565b9050919050565b60006020820190508181036000830152611e3b81611b2f565b9050919050565b60006020820190508181036000830152611e5b81611b6f565b9050919050565b60006020820190508181036000830152611e7b81611baf565b9050919050565b60006020820190508181036000830152611e9b81611bef565b9050919050565b60006020820190508181036000830152611ebb81611c2f565b9050919050565b6000602082019050611ed76000830184611c6f565b92915050565b6000602082019050611ef26000830184611c7e565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611f2a82611ff1565b9150611f3583611ff1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f6a57611f6961208e565b5b828201905092915050565b6000611f8082611ff1565b9150611f8b83611ff1565b925082821015611f9e57611f9d61208e565b5b828203905092915050565b6000611fb482611fd1565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561202657808201518184015260208101905061200b565b83811115612035576000848401525b50505050565b600061204682611ff1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120795761207861208e565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b6120d781611fa9565b81146120e257600080fd5b50565b6120ee81611fbb565b81146120f957600080fd5b50565b61210581611fc7565b811461211057600080fd5b50565b61211c81611ff1565b811461212757600080fd5b50565b61213381611ffb565b811461213e57600080fd5b5056fea2646970667358221220495933343765f38611eb81ed83e4246289ac8a06014a973f97fe340c336f105664736f6c63430008000033",
    },
  };

  // Create an instance of the Ethereum provider
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/ad-zt8gHkms2xBPzsrRNS5b3wU1ez33E"
  );

  // The parameters for the eth_call method
  const callParams = [
    {
      fromAddr: fromAddr,
      to: dai,
      data: "0xa9059cbb000000000000000000000000a3222357a0eccf60c73606170be6c99adecb59b30000000000000000000000000000000000000000000035c0689da79fead85800", // The method signature and arguments for the call
    },
    "latest",
  ];

  // Call the contract method without state overrides
  const call1 = await provider.send("eth_call", callParams);

  // Call the contract method with state overrides
  const call2 = await provider.send("eth_call", [...callParams, stateDiff]);

  // Log the results of both calls
  console.log(call1);
  console.log(call2);
};

main();
