"use client";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { SiHdfcbank } from "react-icons/si";
import style from "@/styles/wallet.module.css";

function Wallet() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("values")) || [];
    setTransactions(storedValues);
  }, []);

  const totalAmount = transactions.reduce((acc, val) => acc + val, 0); // Sum of all transactions

  return (
    <>
      <Navbar />
      <div className={style.wallBody}>
        <Card className={style.card}>
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={20}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={20}
            />
            <div className="flex flex-row">
              <p className="text-md px-1">
                PiggyPal <span className={style.wallet}>Wallet</span>
              </p>
            </div>
          </CardHeader>

          <CardBody>
            <p>
              <span className={style.inr}>INR</span>
              {totalAmount} {/* Show total sum of transactions */}
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p className="text-xs text-default-500">
              Total Transactions: {transactions.length}
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className={style.transHistory}>
        {transactions.map((amount, index) => (
          <Card key={index} className={style.card}>
            <CardHeader className="flex gap-3">
              <SiHdfcbank />
              <div className="flex flex-col">
                <p className="text-md px-1">HDFC BANK</p>
                <p className="text-small text-default-500 px-1">
                  Transaction {index + 1}
                </p>
              </div>
            </CardHeader>

            <CardBody>
              <p className={style.hist}>
                <span className={style.inr}>Transfer complete</span>
                {amount}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Wallet;
