import Image from "next/image";

import heroImg from "@/public/images/memoji.png";
import { Button } from "./ui/button";
import { ArrowRight, DownloadIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-1/2 text-center">
      <div className="bg-gradient-to-r from-[#fbed96] to-[#abecd6] dark:from-blue-900 dark:to-pink-900 p-4 md:p-10 flex flex-col items-center rounded-lg md:rounded-[50px]">
        <Image src={heroImg} alt="hero" className="w-[100px]" />
        <h1 className="text-xl font-normal my-5">Hi, I am Abiodun Bankole</h1>
        <p className="text-xl md:text-[50px] font-bold mt-2 w-full md:w-[80%] leading-tight">
          I develop ideas and help build a better world through software.
        </p>
        <div className="flex gap-4 mt-10">
          <Button className="rounded-full" variant="default">
            Contact me
          </Button>
          <Button className="rounded-full" variant="ghost">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
