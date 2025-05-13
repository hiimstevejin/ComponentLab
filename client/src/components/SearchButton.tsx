import { useHotkeys } from "react-hotkeys-hook";
import { Search } from "lucide-react";

export default function SearchButton({ onOpen }: { onOpen: () => void }) {
  useHotkeys("mod+k", (e) => {
    e.preventDefault();
    onOpen();
  });

  return (
    <button
      onClick={onOpen}
      className="group flex w-full cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-200"
    >
      <Search className="h-4 w-4 group-hover:text-black" />
      <span className="hidden group-hover:text-black sm:inline">Search...</span>
      <kbd className="ml-auto hidden items-center gap-0.5 rounded border border-gray-300 px-1 py-0.5 font-mono text-xs text-gray-500 group-hover:text-black sm:flex">
        ⌘<span className="text-xs">K</span>
      </kbd>
    </button>
  );
}
