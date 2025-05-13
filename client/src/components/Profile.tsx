import { CircleUserRound } from "lucide-react";

interface ProfileProps {
  onClick: () => void;
}
export default function Profile({ onClick }: ProfileProps) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <CircleUserRound className="h-10 w-10 text-gray-500" />
    </button>
  );
}
