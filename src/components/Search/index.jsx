import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const placeholders = [
    "Search Paithani...",
    "Search Banarasi...",
    "Search Kanjivaram...",
    "Search Silk Sarees..."
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === placeholders.length) setIndex(0);

    if (subIndex === placeholders[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 700);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % placeholders.length);
      setTimeout(() => {}, 300);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);

    setPlaceholder(placeholders[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, placeholders]);

  return (
    <div className="searchBox w-full h-[50px] border border-gray-400 rounded-md relative px-3 flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[35px] focus:outline-none bg-transparent pr-10"
      />
      <button><CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-3xl" /></button>

    </div>
  );
};

export default SearchBox;
