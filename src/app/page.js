"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch("/api/home");
      const data = await response.json();
      setApiResponse([data.message, data.version]);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-grow justify-between">
          <div className="px-4">
            <button
              onClick={callApi}
              className="bg-gradient-to-r from-blue-800 to-blue-600 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 "
            >
              Click
            </button>
            <p className="py-2 px-1">{apiResponse}</p>
          </div>

          <div className="px-4">
            <Link href="/register">
              <button className="bg-gradient-to-r from-orange-800 to-orange-600 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 ">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
