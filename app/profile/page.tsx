import Link from 'next/link'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="topnav">
        <div className="topnav-left">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a className="active" href="/profile">My NFTs</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="topnav-right">
          <ul>
            <li><a href="/login">login</a></li>
          </ul>
        </div>
      </div> 

      <h1 className="text-5xl font-bold title">NFT Vending Machine</h1>
      

    </main>
  );
}
