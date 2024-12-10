import { useBiometricAuth } from "ivalt-react";
import React from "react";
import { useState } from "react";
import { UserData } from "ivalt-react";

export const Form = () => {
  const [phone, setPhone] = useState("");
  const handleSucces =(userData: UserData)=>{
   console.log("Authentication successful!", userData);
  }
  const handleError = (error: Error)=>{
    console.log("Authentication successful!", error);

  }
  const { status, error, startAuth, userData, isPoling } = useBiometricAuth({
    requestFrom: "CustomApp",
    onSuccess: handleSucces,
    onError: handleError,
  });
  return (
    <div className="flex items-center justify-center h-screen mt-5">
      <div>
        <h1>Zero trust EndPiont IDENTITY</h1>
      </div>
      <div>
        <h2>Enter Users Mobile Number</h2>
        <form>
          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} disabled={isPoling} />
          <button type="submit" disabled={isPoling ||!phone}>{isPoling ? "Verifying...": "Authenticate"}</button>
          {status !== "idle" &&(
            <div>
                <p>Status: {status}</p>
                {error&& <p>{error.message}</p>}
            </div>
          )}
          {userData && (
            <div>
                <h3>Welcome, {userData.name}!</h3>
                <p>Email: {userData.email}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
