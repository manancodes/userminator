// FeaturesGrid.js

import React from "react";
import SocialIcons from "./SocialIcons";
import GithubCard from "./githubCard";

const FeaturesGrid = () => {
  return (
    <div className="pt-16 bg-neutral-900 text-white flex flex-col items-center justify-center lg:p-32">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-x-6">
        <div className="min-h-[260px] flex flex-col items-center justify-between rounded-xl p-4 bg-neutral-800 col-span-2">
          <p className="text-3xl text-neutral-100 mb-4">
            One handle for everything
          </p>
          <p className="text-xl text-center text-neutral-500 mb-8">
            Usernaminator searches for all major social media platform for the
            perfect username
          </p>
          <SocialIcons />
        </div>
        <div className="rounded-xl min-h-[260px] bg-neutral-800">
          <GithubCard />
        </div>
        {/* <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800 col-span-2 row-span-2"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div> */}
      </div>
    </div>
  );
};

export default FeaturesGrid;
