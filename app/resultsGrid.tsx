// components/SearchResults.js

import Image from "next/image";

const ResultsGrid = (props: { socialMediaPlatforms: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-32 pt-16">
      {props.socialMediaPlatforms.map((platform, index) => (
        <div
          key={index}
          className="bg-neutral-800 text-white p-6 rounded-md flex flex-col items-center"
        >
          <div className="mb-4">
            {/* <Image
              src={`/images/${platform.image}`}
              alt={`${platform.name} Logo`}
              className="w-16 h-16 mx-auto mb-2 rounded-full"
              width={100}
              height={100}
            /> */}
            {platform.svg}
          </div>
          <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
          <p className={platform.available ? "text-green-500" : "text-red-500"}>
            {platform.available ? "Available" : "Not Available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
