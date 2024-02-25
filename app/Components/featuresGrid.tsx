import React from "react";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import GithubCard from "./githubCard";

const FeaturesGrid = () => {
  return (
    <div className="pt-16 bg-neutral-900 text-neutral-100e flex flex-col items-center justify-center lg:p-24 xl:p-28 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6">
        <div className="min-h-[260px] flex flex-col items-center justify-between rounded-xl p-4 bg-neutral-800 md:col-span-2">
          <p className="text-3xl  m-4">One handle for everything</p>
          <p className="text-xl text-center text-neutral-500 mb-8">
            Usernaminator searches for all major social media platforms for the
            perfect username
          </p>
          <SocialIcons />
        </div>
        <div className="rounded-xl min-h-[260px] bg-neutral-800 ">
          <GithubCard />
        </div>
        <div className="min-h-[260px] rounded-xl p-4 bg-neutral-800 flex flex-col items-center">
          <Image
            src="/devices.png"
            alt="Arrow"
            className="p-4 pl-8 pr-8"
            width={200}
            height={200}
            priority
          />
          <p className="text-xl text-neutral-500 m-4">
            Mobile and Desktop Compatible
          </p>
        </div>
        <div className="rounded-xl min-h-[260px] p-4 bg-neutral-800 md:col-span-2 md:row-span-2 ">
          <p className="text-3xl  m-4 text-center ">Story behind userminator</p>
          <p className="p-8 text-xl text-neutral-500">
            So, there I was, on a quest for the ultimate username. Every time I
            thought I found it, bam! Taken. And guess what? Different platforms,
            same old story. It was like a never-ending loop. Frustrating? You
            bet. But hey, necessity is the mother of invention, right?
            That&apos;s how Userminator came to be. Just a regular person tired
            of the username shuffle. Now? One search, all platforms. Life&apos;s
            simpler when you&apos;ve got a buddy like Userminator!
          </p>
        </div>
        <div className="rounded-xl p-4 bg-neutral-800">
          <p className="text-8xl">2</p>
          <p className=" text-neutral-500">Stars on Github</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
