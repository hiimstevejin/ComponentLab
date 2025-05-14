import logo from "../assets/logo.svg";

interface LogoProps {
  onClick: () => void;
}
export default function Logo({ onClick }: LogoProps) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <img className="flex justify-start" src={logo} alt="Logo" />
    </button>
  );
}
