
import { Api, JsonRpc, RpcError } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'; 
import fetch from 'node-fetch';                            // node only; not needed in browsers
import { TextEncoder, TextDecoder } from 'util';           // node only; native TextEncoder/Decoder 

// The Signature Provider holds private keys and is responsible for signing transactions.
const dev_key = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
const defaultPrivateKey = dev_key;
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

// Open a connection to JSON-RPC, include fetch when on NodeJS.
const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });

//Include textDecoder and textEncoder when using in browser.
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

rpc.get_account()
    .then(res => console.log(res))
    .catch(e => {
        if (e instanceof RpcError) {
            console.log(JSON.stringify(e.json, null, 2));
        } else {
            console.log(e);
        }
    });

// rpc.get_table_rows({
//     json: true,              // Get the response as json
//     code: 'eosio.token',     // Contract that we target      
//     scope: 'testacc',         // Account that owns the data   
//     table: 'accounts',        // Table name        
//     limit: 10,               // maximum number of rows that we want to get
// })
// .then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// });


// console.log(resp.rows);

// generate transaction

  // const result = api.transact({
  //   actions: [{
  //     account: 'eosio.token',
  //     name: 'transfer',
  //     authorization: [{
  //       actor: 'hhhhh.x',
  //       permission: 'active',
  //     }],
  //     data: {
  //       from: 'hhhhh.x',
  //       to: 's.u.r.e',
  //       quantity: '0.01 EOS',
  //       memo: '',
  //     },
  //   }]
  // }, {
  //   blocksBehind: 3,
  //   expireSeconds: 30,
  // });
  // console.log(result);
