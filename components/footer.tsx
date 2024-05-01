import Image from "next/image";

import Container from "./container";
import footerimage from "@/public/images/footer-image.png";
import { Separator } from "./ui/separator";
import { Contact, Mail, Phone } from "lucide-react";

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
          <a
            href="mailto:abbey.developer@gmail.com"
            className="flex items-center gap-2 underline"
          >
            <Mail className="w-4 h-4 text-blue-300" />{" "}
            <span>abbey.developer@gmail.com</span>
          </a>
          <a
            href="tel:+2347017181619"
            className="flex items-center gap-2 underline mt-3"
          >
            <Phone className="w-4 h-4 text-blue-300" />
            <span>+234 701 718 1619</span>
          </a>
        </div>
        <Image
          src={footerimage}
          alt="footer image"
          className="w-[350px] hidden md:block"
        />
      </div>
      <Separator className="my-10 bg-gray-800" />
      <p className="text-center text-muted-foreground">
        &copy; Copyright {year}. Developed by me. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
