'use client';

import { showConnect } from '@stacks/connect';
import { userSession } from '../userSession';

import { openContractCall } from '@stacks/connect';
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

export function Button4(){


  return (
    openContractCall({
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any, // which type of block the tx should be mined in

    contractAddress: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
    contractName: 'tremendous-blue-gopher',
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