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

export async function load_nfts() {
    console.log('loading nfts...')
  
    const apiConfig = new Configuration({
      fetchApi: fetch,
      // for mainnet, replace `testnet` with `mainnet`
      basePath: 'https://api.testnet.hiro.so', // defaults to http://localhost:3999
    });
  
    // initiate the /accounts API with the basepath and fetch library
    const accountsApi = new AccountsApi(apiConfig);
  
    // get transactions for a specific account
    const txs = await accountsApi.getAccountAssets({
      principal: 'ST13NS454WKV1X03E7VDQ990CFXFGCE5FZNRVE669',
      limit: 10,
      unanchored: true,
    });
  
    console.log("HELLOWORLD");
  
    const values = []
    for (const v in txs.results) {
      values.push(txs.results[v].tx_id);
      console.log(v);
    }

    document.getElementById("nfts")!.innerHTML = "completed: " + values;//Object.keys(txs.results[0]);

    render_nfts(values);
  }
  
export function render_nfts(id_list: string[]) {
    
    for (let i = 0; i < id_list.length; i++) { 
      const emailHash = md5(id_list[i]);
      let url = `https://www.gravatar.com/avatar/${emailHash}`;
      let element = '<img key={index} src={url} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"/>';
      let elementString = element.replaceAll('{index}', i.toString());
      elementString = elementString.replaceAll('{url}', url);
      document.getElementById("nft_images")!.innerHTML += elementString;
    }
    
    // document.getElementById("nft_images")!.innerHTML = images[0];
    // document.getElementById("img1")!.src = urls[0];
  
    return true;
}