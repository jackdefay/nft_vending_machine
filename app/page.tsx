'use client';

import Link from 'next/link'
import Image from "next/image";
// import { showConnect } from './index.js';
// import { openContractCall } from './index.js';
// import { userSession } from '../userSession';
// import {Button1} from './button.tsx';

import { showConnect } from '@stacks/connect';
import { userSession } from '../userSession';

import { openContractCall, BlockstackProvider } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { AnchorMode, PostConditionMode, stringUtf8CV } from '@stacks/transactions';

import {
  makeContractCall,
  broadcastTransaction,
  NonFungibleConditionCode,
  createAssetInfo,
  makeContractNonFungiblePostCondition,
  FungibleConditionCode,
  makeStandardSTXPostCondition,
  bufferCVFromString,
  bufferCV,
} from '@stacks/transactions';

import { Button1, Button4 } from './buttons';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="topnav">
        <div className="topnav-left">
          <ul> {/* Should replace this with a Link later for prefetching */}
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/profile">My NFTs</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="topnav-right">
          <ul>
            {/* <li><a href="/login">login</a></li> */}
            <li><button onClick={Button1}>Connect Wallet</button></li>
          </ul>
        </div>
      </div> 

      <h1 className="text-5xl font-bold title text-center">NFT Vending Machine</h1>

      <h2 className="text-2xl font-bold title text-center">
        <button onClick={Button4}>Dispense NFT</button>
      </h2>

      <div className="flex flex-row flex-wrap justify-center">
        <p></p>
      </div>

    </main>
  );
}



// export function Button1(){
//   return ( showConnect({
//     userSession, // `userSession` from previous step, to access storage
//     appDetails: {
//       name: 'My Stacks Web-App',
//       icon: "/logo.png", // shown in wallet pop-up
//     },
//     onFinish: () => {
//       window.location.reload(); // WHEN user confirms pop-up
//     },
//     onCancel: () => {
//       console.log('oops'); // WHEN user cancels/closes pop-up
//     },}))
// }

// export function Button2(){
//   // const pick = stringUtf8CV('Alice');

//   return (
//     openContractCall({
//     network: new StacksTestnet(),
//     anchorMode: AnchorMode.Any, // which type of block the tx should be mined in

//     contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
//     contractName: 'generous-rose-turkey',
//     functionName: 'get-value',
//     functionArgs: [bufferCVFromString('test')], // arguments to the contract function

//     postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
//     postConditions: [], // for an example using post-conditions, see next example

//     onFinish: response => {
//       // WHEN user confirms pop-up
//     },
//     onCancel: () => {
//       // WHEN user cancels/closes pop-up
//     },
//   })
//   )
// }

// async function Button3(){
//   // for mainnet, use `StacksMainnet()`
//   const network = new StacksTestnet();

//   // With a standard principal
//   const postConditionAddress = 'SP2ZD731ANQZT6J4K3F5N8A40ZXWXC1XFXHVVQFKE';
//   const postConditionCode = NonFungibleConditionCode.DoesNotSend;
//   const assetAddress = 'SP62M8MEFH32WGSB7XSF9WJZD7TQB48VQB5ANWSJ';
//   const assetContractName = 'test-asset-contract';
//   const assetName = 'test-asset';
//   const assetId = bufferCVFromString('test-token-asset-id');
//   const nonFungibleAssetInfo = createAssetInfo(assetAddress, assetContractName, assetName);

//   // const standardNonFungiblePostCondition = makeStandardNonFungiblePostCondition(
//   //   postConditionAddress,
//   //   postConditionCode,
//   //   nonFungibleAssetInfo,
//   //   assetId
//   // );

//   // With a contract principal
//   const contractAddress = 'SPBMRFRPPGCDE3F384WCJPK8PQJGZ8K9QKK7F59X';
//   const contractName = 'test-contract';

//   const postConditions = makeContractNonFungiblePostCondition(
//     contractAddress,
//     contractName,
//     postConditionCode,
//     nonFungibleAssetInfo,
//     assetId
//   );

//   const txOptions = {
//     contractAddress: 'SPBMRFRPPGCDE3F384WCJPK8PQJGZ8K9QKK7F59X',
//     contractName: 'contract_name',
//     functionName: 'contract_function',
//     functionArgs: [bufferCVFromString('foo')],
//     senderKey: 'b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01',
//     validateWithAbi: true,
//     network,
//     postConditions,
//     anchorMode: AnchorMode.Any,
//   };

//   const transaction = await makeContractCall(txOptions);

//   const broadcastResponse = await broadcastTransaction(transaction, network);
//   const txId = broadcastResponse.txid;
// }


// async function Button3() {
//   // for mainnet, use `StacksMainnet()`
//   const network = new StacksTestnet();

//   const arg = new Uint8Array([32]);
  
//   // Add an optional post condition
//   // See below for details on constructing post conditions
//   const postConditionAddress = 'SP2ZD731ANQZT6J4K3F5N8A40ZXWXC1XFXHVVQFKE';
//   const postConditionCode = FungibleConditionCode.GreaterEqual;
//   const postConditionAmount = 1000000;
//   const postConditions = [
//     makeStandardSTXPostCondition(postConditionAddress, postConditionCode, postConditionAmount),
//   ];
  
//   const txOptions = {
//     contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
//     contractName: 'generous-rose-turkey',
//     functionName: 'get-value',
//     functionArgs: [bufferCV(arg)], //[bufferCVFromString('foo')],
//     senderKey: 'b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01',
//     validateWithAbi: true,
//     network,
//     postConditions,
//     anchorMode: AnchorMode.Any,
//   };
  
//   const transaction = await makeContractCall(txOptions);

//   console.log('A');
  
//   const broadcastResponse = await broadcastTransaction(transaction, network);
//   const txId = broadcastResponse.txid;

//   console.log(txId);
//   console.log(broadcastResponse);

//   return broadcastResponse;
// }

// export function Button4(){


//   return (
//     openContractCall({
//     network: new StacksTestnet(),
//     anchorMode: AnchorMode.Any, // which type of block the tx should be mined in

//     contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
//     contractName: 'deafening-gold-stork',
//     functionName: 'claim',
//     functionArgs: [], // arguments to the contract function

//     postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
//     postConditions: [], // for an example using post-conditions, see next example

//     onFinish: response => {
//       // WHEN user confirms pop-up
//     },
//     onCancel: () => {
//       // WHEN user cancels/closes pop-up
//     },
//   })
//   )
// }