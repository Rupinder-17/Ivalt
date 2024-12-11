import { useBiometricAuth, initializeIValt } from "ivalt-react";
import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";


export const Form = () => {
  initializeIValt({
    baseURL: "https://api.ivalt.com",
    apiKey: "jMQKBdBFIJamh2TARfbUh3NG9h5Nl3mxa72VGfMl",
  });

  const [phone, setPhone] = useState("");
    const [showMap, setShowMap] = useState(false);
  const handleSucces = (userData) => {
    console.log("Authentication successful!", userData);
  };
  const handleError = (error) => {
    console.error("Authentication failed!", error);
  };
  const { status, error, startAuth, userData, isPoling } = useBiometricAuth({
    requestFrom: "CustomApp",
    onSuccess: handleSucces,
    onError: handleError,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    startAuth(phone); 
    setShowMap(true)
  };

  return (
    <div className="flex items-center justify-center h-screen p-5 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h1 className="text-xl font-bold text-center mb-4">
          Zero Trust Endpoint Identity
        </h1>
        <h2 className="text-lg text-gray-700 mb-4 text-center">
          Enter User{"'"}s Mobile Number
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isPoling}
            className="p-2 border rounded bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter mobile number"
          />
          {/* <IntlTelInput
            containerClassName="intl-tel-input"
            inputClassName="form-control"
            onChange={(e) =>{
              console.log("input", e);
            }}
          /> */}
          <button
            type="submit"
            disabled={isPoling || !phone}
            className={`p-2 rounded ${
              isPoling || !phone
                ? "bg-gray-300 text-red-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isPoling ? "Verifying..." : "Authenticate"}
          </button>
          {status !== "idle" && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Status: {status}</p>
              {error && (
                <p className="text-sm text-red-500">Error: {error.message}</p>
              )}
            </div>
          )}
          {userData && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Welcome, {userData.name}!</h3>
              <p className="text-sm text-gray-600">Email: {userData.email}</p>
            </div>
          )}
          {showMap && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217408.96322259825!2d74.70531005971218!3d31.633438299616138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1733885112262!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </form>
      </div>
    </div>
  );
};
