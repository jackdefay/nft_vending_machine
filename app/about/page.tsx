'use client';

import Link from 'next/link'
import Image from "next/image";
// import { showConnect } from './index.js';
// import { openContractCall } from './index.js';
// import { userSession } from '../userSession';
// import {Button1} from './button.tsx';

import { showConnect } from '@stacks/connect';

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

import { Button1 } from './buttons';



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="topnav">
        <div className="topnav-left">
          <ul> {/* Should replace this with a Link later for prefetching */}
            <li><a href="/">Home</a></li>
            <li><a href="/profile">My NFTs</a></li>
            <li><a className="active" href="/about">About</a></li>
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

      <div>
        <h1 className="text-3xl font-bold title">About</h1>
        <p>
            This is a simple NFT vending machine. 
            You can connect your wallet and dispense an NFT. 
            This project was completed for the <a href="https://www.cs.princeton.edu/courses/archive/spring23/cos471/">COS 471 class</a> at Princeton University.
        </p>
      </div>

    </main>
  );
}