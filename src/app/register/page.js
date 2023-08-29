"use client";

import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [apiResponse, setApiResponse] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch("/api/register");
      const data = await response.json();
      setApiResponse(data.msg);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  callApi();
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="px-8">
          <button className="px-6 py-2 bg-slate-600 rounded-md uppercase">
            {apiResponse} mode
          </button>
        </div>
        <Link href="/">
          <button className="py-2">&#60;&#60;Back to Home</button>
        </Link>
        <h2 className="text-center text-xl py-2">Wellcome to Register Page</h2>
      </div>
    </>
  );
};

export default Register;
