
import { Navbar } from "@/components/navbar";
import { IoWallet } from "react-icons/io5";
import { AiOutlineTransaction, AiFillBank } from "react-icons/ai";
import Link from "next/link";
import style from "@/styles/home.module.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={style.homeContainer}>
        <Link href="/wallet">
          {" "}
          <IoWallet />
          
        </Link>
        <Link href="/transaction">
          {" "}
          <AiOutlineTransaction />
        </Link>
        <Link href="#">
          {" "}
          <AiFillBank />
        </Link>
        <Link href="#">
          {" "}
          <IoWallet />
        </Link>
        <Link href="#">
          {" "}
          <IoWallet />
        </Link>
        <Link href="#">
          {" "}
          <IoWallet />
        </Link>
      </div>
    </>
  );
}
