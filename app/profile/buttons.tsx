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