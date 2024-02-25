// components/SearchResults.js

import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";

const ResultsGrid = (props: { socialMediaPlatforms: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-32 pt-16">
      {props.socialMediaPlatforms.map((platform, index) => (
        <div
          key={index}
          className="bg-neutral-800 text-white p-6 rounded-md flex flex-col items-center"
        >
          <div className="mb-4">{platform.svg}</div>
          <h3 className="text-xl font-semibold mb-4">{platform.name}</h3>
          {platform.available ? (
            <CheckCircle2 size={36} color="#008c64" strokeWidth={3} />
          ) : (
            <XCircle size={36} color="#8c2828" strokeWidth={3} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
