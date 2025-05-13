import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import Button from "./Button";
import Profile from "./Profile";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <nav className="flex h-10 justify-between">
        <div className="flex w-1/3 justify-start">
          <Logo onClick={handleClick} />
        </div>
        <div className="flex w-1/3 justify-center">
          <SearchButton onOpen={() => setIsOpen(true)} />
          <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        <div className="flex w-1/3 items-center justify-end gap-2">
          <Button onClick={handleClick}>Publish</Button>
          <Profile onClick={handleClick} />
        </div>
      </nav>
    </>
  );
}
