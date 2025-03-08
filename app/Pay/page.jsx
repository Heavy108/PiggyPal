"use client";
import { Navbar } from "@/components/navbar";
import { useState, useEffect } from "react";
import { useTransactionStore } from "@/store/useTransactionStore";

function TransactionInput() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const { value, setValue } = useTransactionStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("formData")) || [];
      setData(storedData);
      const userProfile = storedData[value] || {};
      setProfile(userProfile);
    }
  }, [value]);

  const handleAddTransaction = () => {
    if (typeof window === "undefined") return; // Ensure we're on the client side

    let amount = parseInt(inputValue, 10);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive integer");
      return;
    }
    let storedValues = JSON.parse(localStorage.getItem("values")) || [];
    storedValues[value] = storedValues[value] || [];
    let values = 0;
    let decimalPart = amount % 10;
    let diff = 10 - decimalPart;
    let min = Math.min(decimalPart, diff);

    if (min === 0) {
      values = profile.sliderValue || 3;
    } else {
      values = Math.ceil(min);
    }

    storedValues[value].push(values);
    localStorage.setItem("values", JSON.stringify(storedValues));
    setInputValue(""); // Clear input field
    alert("Payment Successful");
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Enter Amount</h2>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an integer"
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button onClick={handleAddTransaction} style={{ padding: "10px" }}>
          Add Transaction
        </button>
      </div>
    </>
  );
}

export default TransactionInput;
