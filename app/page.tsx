'use client';

import Link from 'next/link'
import Image from "next/image";
import { showConnect } from './index.js';

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
            <li><a href="/login">login</a></li>
            <li><a onClick={showConnect}>Connect Wallet</a></li>
          </ul>
        </div>
      </div> 

      <h1 className="text-5xl font-bold title">NFT Vending Machine</h1>

      <Image src="/logo.png" alt="logo" width={72} height={16} />
      

    </main>
  );
}

// function MyButton() {

//   function handleClick() {
//     showConnect();
//   }

//   return (
//     <button onClick={handleClick}>Connect Wallet
//     </button>
//   );
// }

// import { showConnect } from '@stacks/connect';
// import { userSession } from './userSession';

// const myAppName = 'My Stacks Web-App'; // shown in wallet pop-up
// const myAppIcon = window.location.origin + '/vercel.svg'; // shown in wallet pop-up

// showConnect({
//   userSession, // `userSession` from previous step, to access storage
//   appDetails: {
//     name: myAppName,
//     icon: myAppIcon,
//   },
//   onFinish: () => {
//     window.location.reload(); // WHEN user confirms pop-up
//   },
//   onCancel: () => {
//     console.log('oops'); // WHEN user cancels/closes pop-up
//   },
// });


// or
// const userAddresses = await window.LeatherProvider?.request('getAddresses');

//or
// const usersNativeSegwitAddress = userAddresses.results.addresses
//   .find(address => address.type === 'p2wpkh');

// const addressDetails = await fetch('https://mempool.space/api/address/' + usersNativeSegwitAddress)
