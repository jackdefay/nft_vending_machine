'use client';

import Link from 'next/link'
import Image from "next/image";
// import { showConnect } from './index.js';
// import { openContractCall } from './index.js';
// import { userSession } from '../userSession';
// import {Button1} from './button.tsx';

import { showConnect } from '@stacks/connect';
import { userSession } from '../userSession';

import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { AnchorMode, PostConditionMode, stringUtf8CV } from '@stacks/transactions';




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
        <button onClick={Button2}>Dispense NFT</button>
      </h2>

    </main>
  );
}


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
  const pick = stringUtf8CV('Alice');

  return (
    openContractCall({
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any, // which type of block the tx should be mined in

    contractAddress: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK',
    contractName: 'example-contract',
    functionName: 'vote',
    functionArgs: [pick],

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