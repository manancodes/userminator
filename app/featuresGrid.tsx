import GithubCard from "./githubCard";
import SocialIcons from "./SocialIcons";

const FeaturesGrid = () => {
  return (
    <div className="pt-16 bg-neutral-900 text-white flex flex-col items-center justify-center p-32">
      <div className="grid auto-rows grid-cols-3 gap-6">
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
        {/* <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800 col-span-2 row-span-2"></div>
        <div className="row-span-1 rounded-xl p-4 bg-neutral-800"></div> */}
      </div>

      <footer className="mt-8 text-xs text-neutral-500">
        &copy; 2023 Username Checker. All rights reserved.
      </footer>
    </div>
  );
};

export default FeaturesGrid;
