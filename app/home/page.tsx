
import { Navbar } from "@/components/navbar";
import { IoWallet } from "react-icons/io5";
import { AiOutlineTransaction, AiFillBank } from "react-icons/ai";
import Link from "next/link";
import style from "@/styles/home.module.css"
import { FaAmazonPay } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={style.homeContainer}>
        <Link href="/Pay">
          {" "}
          <FaAmazonPay />
          <span>Pay</span>
        </Link>
        <Link href="/transaction">
          {" "}
          <AiOutlineTransaction />
          <span>Transaction</span>
        </Link>
        <Link href="/profile">
          {" "}
          <AiFillBank />
          <span>Profile</span>
        </Link>
        <Link href="/wallet">
          {" "}
          <IoWallet />
          <span>wallet</span>
        </Link>
        <Link href="/wallet">
          {" "}
          <IoWallet />
          <span>wallet</span>
        </Link>
        <Link href="/wallet">
          {" "}
          <IoWallet />
          <span>wallet</span>
        </Link>
      </div>
    </>
  );
}
