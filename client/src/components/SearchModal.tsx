import { useHotkeys, Options } from "react-hotkeys-hook";

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const options: Options = {
    enableOnFormTags: ["INPUT"],
  };

  useHotkeys(
    "esc",
    () => {
      if (isOpen) onClose();
    },
    options,
    [isOpen, onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-bold">Search</h2>
        <input
          autoFocus
          type="text"
          placeholder="Type to search..."
          className="w-full rounded border p-2 outline-none focus:ring"
        />
        <button
          onClick={onClose}
          className="mt-4 text-sm text-blue-600 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
