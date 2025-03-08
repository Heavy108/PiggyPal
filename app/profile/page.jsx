"use client";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";

function Profile() {
  const { value, setValue } = useTransactionStore();
  const [profile, setProfile] = useState({});
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("formData")) || [];
      const userProfile = data[value] || {};
      setProfile(userProfile);
      setSliderValue(userProfile.sliderValue || 0);
    }
  }, [value]);

  useEffect(() => {
    if (typeof window !== "undefined" && profile) {
      const data = JSON.parse(localStorage.getItem("formData")) || [];
      profile.sliderValue = sliderValue;
      data[value] = profile;
      localStorage.setItem("formData", JSON.stringify(data));
    }
  }, [sliderValue, value, profile]);

  return (
    <>
      <Navbar />
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
