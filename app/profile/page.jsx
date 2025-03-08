"use client";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useState, useEffect } from "react";
import {Navbar} from "@/components/navbar"
function Profile() {
  const { value, setValue } = useTransactionStore();
  const data = JSON.parse(localStorage.getItem("formData")) || [];
  const profile = data[value] || {};

  const [sliderValue, setSliderValue] = useState(profile.sliderValue || 0);

  useEffect(() => {
    if (profile) {
      profile.sliderValue = sliderValue; // Update the object
      data[value] = profile; // Update the array
      localStorage.setItem("formData", JSON.stringify(data)); // Save back to localStorage
    }
  }, [sliderValue, value]);

  return (
    <>
    <Navbar/>
      <h2>Profile</h2>
      <input
        type="range"
        min="3"
        max="10"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <p>Slider Value: {sliderValue}</p>
      {profile && (
        <>
          <h3>{profile.username || "N/A"}</h3>
          <h3>{profile.email || "N/A"}</h3>
          <h3>{profile.phn_number || "N/A"}</h3>
        </>
      )}
    </>
  );
}

export default Profile;
