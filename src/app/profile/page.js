"use client";

import { useEffect, useState } from "react";

const Profile = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("/api/profile")
  //     // .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  // const callApi = async () => {
  //   try {
  //     const response = await fetch("/api/profile");
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error calling API:", error);
  //   }
  // };
  // callApi();

  return (
    <>
      <div className="container mx-auto py-10">
        {" "}
        <h2 className="text-center text-xl">Wellcome to Profile Page</h2>
      </div>
    </>
  );
};

export default Profile;
