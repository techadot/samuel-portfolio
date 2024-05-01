import Image from "next/image";

import Container from "./container";

import aboutImg from "@/public/images/image-about.png";
import vector from "@/public/images/vector.png";

const About = () => {
  return (
    <Container className="px-0 py-16">
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

      <div className="flex justify-between items-center gap-4">
        <p className="w-1/2 text-xl font-normal text-black border-l-4 border-black px-6">
          I am a software engineer with 5+ years of experience in the tech
          industry. I am passionate about building innovative and user-friendly
          software solutions. I have a strong understanding of software
          development principles and practices, and I am proficient in a variety
          of programming languages and technologies such as JavaScript, Dart and
          Typescript. I am a highly motivated and results-oriented individual. I
          am always looking for new challenges and opportunities to learn and
          grow.
        </p>
        <Image src={aboutImg} alt="Profile" className="w-[350px]" />
      </div>
    </Container>
  );
};

export default About;
