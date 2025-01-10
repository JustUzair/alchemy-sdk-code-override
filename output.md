## Run the script

- `Install`

```bash
npm i
```

- Command to run

```bash
node index.js
```

## Output produced

- Even though we refer to the same steps to override the state for allowance on [alchemy docs](https://docs.alchemy.com/reference/eth-call) I am still facing an issue related to `insufficient allowance`.

```bash
$ node index.js
D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\logger\lib\index.js:238
        var error = new Error(message);
                    ^

Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":42,\"error\":{\"code\":3,\"message\":\"execution reverted: Dai/insufficient-balance\",\"data\":\"0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000\"}}", error={"code":3,"data":"0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"}, requestBody="{\"method\":\"eth_call\",\"params\":[{\"fromAddr\":\"0x80787af194C33b74a811f5e5c549316269d7Ee1A\",\"to\":\"0x6b175474e89094c44da98b954eedeac495271d0f\",\"data\":\"0xa9059cbb000000000000000000000000a3222357a0eccf60c73606170be6c99adecb59b30000000000000000000000000000000000000000000035c0689da79fead85800\"},\"latest\"],\"id\":42,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://eth-mainnet.g.alchemy.com/v2/ad-zt8gHkms2xBPzsrRNS5b3wU1ez33E", code=SERVER_ERROR, version=web/5.7.1)
    at Logger.makeError (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:313:32
    at step (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:33:23)
    at Object.next (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:14:53)
    at fulfilled (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:5:58)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'processing response error',
  code: 'SERVER_ERROR',
  body: '{"jsonrpc":"2.0","id":42,"error":{"code":3,"message":"execution reverted: Dai/insufficient-balance","data":"0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"}}',
  error: Error: execution reverted: Dai/insufficient-balance
      at getResult (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\providers\lib\json-rpc-provider.js:191:21)
      at processJsonFunc (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:356:22)
      at D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:288:46
      at step (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:33:23)
      at Object.next (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:14:53)
      at fulfilled (D:\WORK\BuildBear\alchemy-sdk-eth-call\node_modules\@ethersproject\web\lib\index.js:5:58)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    code: 3,
    data: '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000'
  },
  requestBody: '{"method":"eth_call","params":[{"fromAddr":"0x80787af194C33b74a811f5e5c549316269d7Ee1A","to":"0x6b175474e89094c44da98b954eedeac495271d0f","data":"0xa9059cbb000000000000000000000000a3222357a0eccf60c73606170be6c99adecb59b30000000000000000000000000000000000000000000035c0689da79fead85800"},"latest"],"id":42,"jsonrpc":"2.0"}',
  requestMethod: 'POST',
  url: 'https://eth-mainnet.g.alchemy.com/v2/ad-zt8gHkms2xBPzsrRNS5b3wU1ez33E'
}

Node.js v20.12.2
```
