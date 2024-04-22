'use client';

import Image from "next/image";

import { showConnect } from '@stacks/connect';
import { userSession } from '../../userSession';

import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { AnchorMode, PostConditionMode} from '@stacks/transactions';

import {
  bufferCVFromString,
} from '@stacks/transactions';

import fetch from 'cross-fetch';
import { Configuration, AccountsApi } from '@stacks/blockchain-api-client';
import { useEffect } from 'react';


import md5 from 'md5';

import { load_nfts, render_nfts } from './nfts';
import { Button1, Button2, Button4 } from './buttons';



export default function Home() {
  // console.log('entered nft page')
  // const address = userSession.loadUserData();
  // console.log(address);

  useEffect(() => {
    console.log('loading nfts...')
    if (userSession.isUserSignedIn()) {
      load_nfts();
    }
    // load_nfts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="topnav">
        <div className="topnav-left">
          <ul> {/* Should replace this with a Link later for prefetching */}
            <li><a href="/">Home</a></li>
            <li><a className="active" href="/profile">My NFTs</a></li>
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

      <h1 className="text-5xl font-bold title text-center">Your NFTs</h1>

      <p id='nfts'></p>

      <div id='nft_images'>
        <img id='img1' src=''></img>
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




// (async () => {
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
//   });

//   console.log(txs);

//   document.getElementById("nfts").innerHTML = "completed";

// })().catch(console.error);


// async function load_nfts() {
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

//   console.log(txs);

//   document.getElementById("nfts")!.innerHTML = "completed: " + txs.results.toString();
// }

// function render_nfts(id_list: string[]) {

//   const urls = [];
//   const images = [];
  
//   for (let i = 0; i < id_list.length; i++) { 
//     const emailHash = md5(id_list[i]);
//     urls.push(`https://www.gravatar.com/avatar/${emailHash}`);
//     images.push(<img key={i} src={urls[i]} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"/>);
//   }

//   const image_html = images.join('');

//   document.getElementById("nft_images")!.innerHTML = image_html;

//   return urls;
// }