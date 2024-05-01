import Image from "next/image";

import Container from "./container";

import aboutImg from "@/public/images/image-about.png";

const About = () => {
  return (
    <Container className="px-0 py-16">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-muted-foreground">Get to know me!</p>

      <div className="flex justify-between items-center gap-4">
        <p className="w-1/2 text-xl font-bold text-black border-l-4 border-black px-6">
          I am a software engineer with 5+ years of experience in the tech
          industry. I am passionate about building innovative and user-friendly
          software solutions. I have a strong understanding of software
          development principles and practices, and I am proficient in a variety
          of programming languages and technologies such as JavaScript, Dart and
          Typescript.
        </p>
        <Image src={aboutImg} alt="Profile" className="w-[350px]" />
      </div>
    </Container>
  );
};

export default About;
