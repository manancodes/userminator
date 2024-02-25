import React from "react";
import Image from "next/image";

const GithubCard = () => {
  return (
    <div className="group flex flex-col space-y-6 h-full relative cursor-pointer overflow-hidden rounded-xl bg-neutral-800 p-6">
      <div className="flex flex-row items-center justify-between">
        <div className="z-20 flex flex-col items-start ">
          <p className="text-3xl text-neutral-100">Github</p>
        </div>
        <div>
          <span className="absolute right-6 top-6 z-0 h-12 w-12 rounded-full drop-shadow-md bg-neutral-600 transition-all duration-300 group-hover:scale-[20]"></span>
          <div className="relative z-10">
            <span className="z-20 grid h-12 p-2 w-12 place-items-center rounded-full transition-all duration-500">
              <Image
                src="/github.svg"
                alt="github-logo"
                width={60}
                height={60}
                className=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className="z-20 ">
        <h1 className="text-xl text-neutral-500">
          This is a free and open source project
        </h1>
      </div>
      <button
        className="z-20 text-sm font-medium border-2 p-1 py-2 rounded-full flex flex-row items-center justify-center absolute bottom-6 self-center w-10/12 group-hover:border-white group-hover:bg-white group-hover:text-neutral-600"
        onClick={() => {
          window.open("https://github.com/manancodes/userminator", "_blank");
        }}
      >
        Contribute
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-3 h-3 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default GithubCard;
