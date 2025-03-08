"use client";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";

function Profile() {
  const { value, setValue } = useTransactionStore();
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(storedData);
    const userProfile = storedData[value] || {};
    setProfile(userProfile);
    setSliderValue(userProfile.sliderValue || 0);
  }, [value]);

  useEffect(() => {
    if (profile) {
      const updatedProfile = { ...profile, sliderValue };
      const updatedData = [...data];
      updatedData[value] = updatedProfile;
      localStorage.setItem("formData", JSON.stringify(updatedData));
    }
  }, [sliderValue, value, profile, data]);

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
