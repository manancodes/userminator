import React from "react";
import { X, MoveUpRight } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchUsed: boolean;
  onClearSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSubmit,
  searchUsed,
  onClearSearch,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-between space-x-2 bg-neutral-900 border border-neutral-600 text-white rounded-full p-2 w-full sm:w-96"
    >
      <input
        type="text"
        placeholder="Enter a username"
        value={value}
        className="pl-6 bg-neutral-900 text-white placeholder-neutral-500 p-2 focus:outline-none w-full"
        onChange={onChange}
      />
      <button
        className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 transition-colors focus:outline-none"
        type={searchUsed ? "button" : "submit"}
        onClick={searchUsed ? onClearSearch : undefined}
      >
        {searchUsed ? <X strokeWidth={1} /> : <MoveUpRight strokeWidth={1} />}
      </button>
    </form>
  );
};

export default SearchInput;
