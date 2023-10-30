import Image from "next/image";
import GithubCard from "./githubCard";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-32">
      <div className="text-center">
        <h1 className="flex text-7xl font-extrabold">
          {/* <Image
            src="/tornado.svg"
            alt="Arrow"
            className="dark:invert"
            width={24}
            height={24}
            priority
          /> */}
          Unleash Your Digital Identity
        </h1>
        <p className="mt-6 text-3xl text-neutral-500 mb-8">
          Find Your Perfect Username Today!
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between space-x-2 bg-neutral-900 border border-neutral-600 text-white rounded-full p-2 w-96">
            <input
              type="text"
              placeholder="Enter a username"
              className="bg-neutral-900 text-white placeholder-neutral-500 p-2 focus:outline-none"
            />
            <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 transition-colors focus:outline-none">
              <Image
                src="/arrow-ne.svg"
                alt="Arrow"
                className="dark:invert"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid auto-rows grid-cols-3 gap-6 mt-32">
        <div className="flex flex-col items-center justify-between row-span-1 rounded-xl p-4 bg-neutral-800 col-span-2">
          <p className="text-3xl text-neutral-100 mb-4">
            One handle for everything
          </p>
          <p className="text-xl text-center text-neutral-500 mb-8">
            Usernaminator searches for all major social media platform for the
            perfect username
          </p>
          <SocialIcons />
        </div>
        <div className="row-span-1 rounded-xl bg-neutral-800">
          <GithubCard />
        </div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800 col-span-2 row-span-2"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div>
      </div>

      <footer className="mt-8 text-xs text-neutral-500">
        &copy; 2023 Username Checker. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
