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
  
    console.log(txs);
  
    document.getElementById("nfts")!.innerHTML = "completed: " + txs.results.toString();
  }
  
export function render_nfts(id_list: string[]) {
  
    const urls = [];
    const images = [];
    
    for (let i = 0; i < id_list.length; i++) { 
      const emailHash = md5(id_list[i]);
      urls.push(`https://www.gravatar.com/avatar/${emailHash}`);
      images.push(<img key={i} src={urls[i]} alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"/>);
    }
  
    const image_html = images.join('');
  
    document.getElementById("nft_images")!.innerHTML = image_html;
  
    return urls;
  }