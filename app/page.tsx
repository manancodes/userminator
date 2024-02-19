"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeaturesGrid from "./featuresGrid";
import ResultsGrid from "./resultsGrid";
import socialMediaPlatforms from "./mockData/socialMediaData";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchUsed, setSearchUsed] = useState(false);

  return (
    <>
      <div className="flex justify-center p-1 bg-neutral-950">
        This project is still under development
      </div>

      <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-8 md:p-16 xl:p-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
            Unleash Your Digital Identity
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-neutral-500 mb-8">
            Find Your Perfect Username Today!
          </p>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between space-x-2 bg-neutral-900 border border-neutral-600 text-white rounded-full p-2 w-full sm:w-96">
              <input
                type="text"
                placeholder="Enter a username"
                className="pl-6 bg-neutral-900 text-white placeholder-neutral-500 p-2 focus:outline-none w-full"
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (!e.target.value) {
                    setSearchUsed(false);
                  }
                }}
              />
              <button
                className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 transition-colors focus:outline-none"
                onClick={() => {
                  setSearchUsed(true);
                }}
              >
                <Image
                  src="/arrow-ne.svg"
                  alt="Arrow"
                  className="dark:invert p-1"
                  width={24}
                  height={24}
                  priority
                />
              </button>
            </div>
          </div>
        </div>
        {searchUsed ? (
          <ResultsGrid socialMediaPlatforms={socialMediaPlatforms} />
        ) : (
          <FeaturesGrid />
        )}

        <footer className="mt-8 text-xs text-neutral-500">
          &copy; 2023 Username Checker. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Home;
