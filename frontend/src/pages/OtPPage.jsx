import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    setLoading(true);
    // Simulate OTP verification process
    setTimeout(() => {
      setLoading(false);
      navigate("/");  // Redirect to HomePage
    }, 2000);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 max-w-md">
        <h2 className="text-3xl font-bold mb-6">OTP Verification</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleVerifyOtp}
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? "opacity-50" : ""}`}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default OTPPage;
