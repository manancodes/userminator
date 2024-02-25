"use client";
import React, { useState } from "react";
import FeaturesGrid from "./Components/featuresGrid";
import ResultsGrid from "./Components/resultsGrid";
import socialMediaPlatforms from "./mockData/socialMediaData";
import SearchInput from "./Components/SearchInput";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchUsed, setSearchUsed] = useState<boolean>(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      setSearchUsed(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setSearchUsed(false);
    }
  };

  const handleClearSearch = () => {
    setSearch("");
    setSearchUsed(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <div className="flex justify-center p-1 bg-neutral-950">
        This project is still under development
      </div>
      <div className="flex-grow text-white flex flex-col items-center p-8 md:p-16 xl:p-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
            Unleash Your Digital Identity
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-neutral-500 mb-8">
            Find Your Perfect Username Today!
          </p>
          <div className="flex items-center justify-center">
            <SearchInput
              value={search}
              onChange={handleInputChange}
              onSubmit={handleSearch}
              searchUsed={searchUsed}
              onClearSearch={handleClearSearch}
            />
          </div>
        </div>
        {searchUsed ? (
          <ResultsGrid socialMediaPlatforms={socialMediaPlatforms} />
        ) : (
          <FeaturesGrid />
        )}
      </div>

      <footer className="text-xs text-center text-neutral-500 m-8">
        &copy; 2023 Username Checker. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
