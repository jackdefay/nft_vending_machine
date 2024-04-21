'use client';

import Image from "next/image";

import { showConnect } from '@stacks/connect';
import { userSession } from '../../userSession';

import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { AnchorMode, PostConditionMode} from '@stacks/transactions';
import { Configuration, AccountsApi } from '@stacks/blockchain-api-client';


import { bufferCVFromString } from '@stacks/transactions';


export function Button1(){
    return ( showConnect({
      userSession, // `userSession` from previous step, to access storage
      appDetails: {
        name: 'My Stacks Web-App',
        icon: "/logo.png", // shown in wallet pop-up
      },
      onFinish: () => {
        window.location.reload(); // WHEN user confirms pop-up
      },
      onCancel: () => {
        console.log('oops'); // WHEN user cancels/closes pop-up
      },}))
  }
  
  export function Button2(){
    // const pick = stringUtf8CV('Alice');
  
    return (
      openContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any, // which type of block the tx should be mined in
  
      contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
      contractName: 'generous-rose-turkey',
      functionName: 'get-value',
      functionArgs: [bufferCVFromString('test')], // arguments to the contract function
  
      postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
      postConditions: [], // for an example using post-conditions, see next example
  
      onFinish: response => {
        // WHEN user confirms pop-up
      },
      onCancel: () => {
        // WHEN user cancels/closes pop-up
      },
    })
    )
  }
  
  export function Button4(){
  
  
    return (
      openContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any, // which type of block the tx should be mined in
  
      contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
      contractName: 'deafening-gold-stork',
      functionName: 'claim',
      functionArgs: [], // arguments to the contract function
  
      postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
      postConditions: [], // for an example using post-conditions, see next example
  
      onFinish: response => {
        // WHEN user confirms pop-up
      },
      onCancel: () => {
        // WHEN user cancels/closes pop-up
      },
    })
    )
  }

// export async function ButtonViewNfts(){
//   console.log('loading nfts...')

//   const apiConfig = new Configuration({
//     fetchApi: fetch,
//     // for mainnet, replace `testnet` with `mainnet`
//     basePath: 'https://api.testnet.hiro.so', // defaults to http://localhost:3999
//   });

//   // initiate the /accounts API with the basepath and fetch library
//   const accountsApi = new AccountsApi(apiConfig);

//   // get transactions for a specific account
//   const txs = await accountsApi.getAccountAssets({
//     principal: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
//     limit: 10,
//     unanchored: true,
//   });

//   console.log("HELLOWORLD");

//   const values = []
//   for (const v in txs.results.values()) {
//     values.push(v);
//     console.log(v);
//   }

//   document.getElementById("nfts")!.innerHTML = "completed: " + values;

//   // render_nfts(txs.results.map((tx) => tx.asset.asset_id));
// }