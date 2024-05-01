import Image from "next/image";
import Container from "./container";
import { Menu } from "lucide-react";
import logo from "@/public/images/abbeydev-logo.png";
import Profile from "./profile";
import DropDown from "./dropdown";

const Nav = () => {
  return (
    <Container className="flex justify-between items-center p-5 px-10 border-b fixed backdrop-blur-lg bg-opacity-50">
      <Image src={logo} alt="" width={100} height={100} />
      <DropDown />
    </Container>
  );
};

export default Nav;
