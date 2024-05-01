import Image from "next/image";

import Container from "./container";
import footerimage from "@/public/images/footer-image.png";
import { Separator } from "./ui/separator";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container className="py-10 bg-[#111827] text-white rounded-t-3xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[40px] font-bold mb-4">
            Do you have <br /> any idea?{" "}
            <span className="text-blue-300">Let&apos;s build it together!</span>
          </h1>
          <p></p>
          <p>abbey.developer@gmail.com</p>
          <p>+234 701 718 1619</p>
        </div>
        <Image src={footerimage} alt="footer image" className="w-[350px]" />
      </div>
      <Separator className="my-10 bg-gray-800" />
      <p className="text-center text-muted-foreground">
        &copy; Copyright {year}. Developed by me. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
