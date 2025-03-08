"use client";
import { Navbar } from "@/components/navbar";
import { useState, useEffect } from "react";
import { useTransactionStore } from "@/store/useTransactionStore";

function TransactionInput() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const { value, setValue } = useTransactionStore();
  const [storedValues, setStoredValues] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("formData")) || [];
      setData(storedData);
      const userProfile = storedData[value] || {};
      setProfile(userProfile);
      const existingValues = JSON.parse(localStorage.getItem("values")) || {};
      setStoredValues(existingValues);
    }
  }, [value]);

  const handleAddTransaction = () => {
    if (typeof window === "undefined") return; // Ensure client-side execution

    let amount = parseInt(inputValue, 10);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive integer");
      return;
    }

    let storedValuesLocal = JSON.parse(localStorage.getItem("values")) || {};

    if (!Array.isArray(storedValuesLocal[value])) {
      storedValuesLocal[value] = [];
    }

    let decimalPart = amount % 10;
    let diff = 10 - decimalPart;
    let min = Math.min(decimalPart, diff);
    let values = min === 0 ? profile.sliderValue || 3 : Math.ceil(min);

    storedValuesLocal[value].push(values);
    localStorage.setItem("values", JSON.stringify(storedValuesLocal));

    setStoredValues(storedValuesLocal); // Update state
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
          proceede
        </button>
      </div>
    </>
  );
}

export default TransactionInput;
