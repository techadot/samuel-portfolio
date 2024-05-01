import Image from "next/image";

import Container from "./container";

import aboutImg from "@/public/images/image-about.png";
import vector from "@/public/images/vector.png";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="px-0 py-16">
      <div className="relative">
        <h1 className="text-4xl font-bold">
          About <br />
          Me
        </h1>
        <Image
          src={vector}
          alt="vector"
          className="w-[130px] bottom-8 absolute "
        />
      </div>
      <p className="text-muted-foreground">Get to know me!</p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div>
          <p className="w-full lg:w-1/2 text-xl font-normal border-l-4 border-black dark:border-white px-6 mt-5">
            I am a software engineer with 5+ years of experience in the tech
            industry. I am passionate about building innovative and
            user-friendly software solutions. I have a strong understanding of
            software development principles and practices, and I am proficient
            in a variety of programming languages and technologies such as
            JavaScript, Dart and Typescript. I am a highly motivated and
            results-oriented individual. I am always looking for new challenges
            and opportunities to learn and grow.
          </p>
          <a href="https://wa.me/2347017181619">
            <Button
              className="bg-green-400 rounded-full text-white mt-10"
              variant="default"
            >
              Send me a WhatsApp message
            </Button>
          </a>
        </div>
        <Image src={aboutImg} alt="Profile" className="w-[350px]" />
      </div>
    </div>
  );
};

export default About;
