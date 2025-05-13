import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-md bg-[var(--primary-color)] px-4 py-2 text-white hover:bg-[var(--primary-hover)]"
    >
      {children}
    </button>
  );
}
