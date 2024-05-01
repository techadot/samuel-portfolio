import Image from "next/image";

import Card from "./card";
import Container from "./container";
import { Button } from "./ui/button";
import { ArrowUpRight, Github, Link } from "lucide-react";
import { Badge } from "./ui/badge";

import lms from "@/public/images/lms.png";
import tenmg from "@/public/images/10mg.png";
import kma from "@/public/images/kma.png";
import gbmobile from "@/public/images/gb-mobile.png";
import pz from "@/public/images/pz.png";
import gbweb from "@/public/images/gb-web.png";
import storefront from "@/public/images/storefront.png";

const Projects = () => {
  return (
    <Container className="px-0 pt-20">
      <h1 className="text-4xl font-bold">
        All my <br />
        Projects
      </h1>
      <p className="w-1/2 text-muted-foreground">
        Here are some selected projects that showcase my passion for software
        development
      </p>

      {/* LMS Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div className="w-full h-full bg-gradient-to-r from-[#fbed96] to-[#abecd6] rounded-lg p-8">
          <Image src={lms} alt="project1" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">LMS Platform</h1>
          <p className="text-muted-foreground">
            This app is an LMS platform for course tutors who are interested in
            selling their courses to students all around the world. This app was
            developed using NextJs 13. I developed the app form scratch. It also
            include Stripe for making payments.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-red-400">NextJs 13</Badge>
            <Badge className="bg-blue-300">React</Badge>
            <Badge className="bg-black">Stripe</Badge>
            <Badge className="bg-green-300">Mux</Badge>
            <Badge className="bg-slate-300">Prisma</Badge>
            <Badge className="bg-blue-800">Tailwind</Badge>
            <Badge className="bg-slate-300">MySQL</Badge>
            <Badge className="bg-black">Shadcn-ui</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* 10mg Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">10mg Pharma Website</h1>

          <p className="text-muted-foreground">
            This is a website developed for a pharmaceutical company. This
            company helps improve the quality life of people suffering from
            chronic pains. They are doing this through AI-driven financing with
            innovative and effective pharmaceutical solutions.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-black">React</Badge>
            <Badge className="bg-blue-800">Tailwind</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <a
              href="https://10mg.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full">
                Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
              </Button>
            </a>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-[#949494] to-[#0bebff] rounded-lg p-8">
          <Image src={tenmg} alt="project2" />
        </div>
      </Card>

      {/* KMA Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div className="w-full h-full bg-gradient-to-r from-[#fb8282] to-[#55bbff] rounded-lg p-8">
          <Image src={kma} alt="kma" />
        </div>
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">Krizbeatz Music Academy</h1>
          <p className="text-muted-foreground">
            This app is a platform for music enthusiast who wants to learn how
            to make music online with live classes. This classes are taken by
            Krizbeatz the Drummerboy himself.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-blue-300">React</Badge>
            <Badge className="bg-black">Paystack</Badge>
            <Badge className="bg-slate-300">Google Classroom</Badge>
            <Badge className="bg-blue-800">Tailwind</Badge>
            <Badge className="bg-green-300">Supabase</Badge>
            <Badge className="bg-black">Shadcn-ui</Badge>
            <Badge className="bg-black">Python</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Greenbii Mobile App Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">Greenbii Mobile App</h1>
          <p className="text-muted-foreground">
            This app is an ERM Platform for businesses to manage their business
            activities. This app helps businesses to also manage their
            employees, office tasks, to mention a few. The app was developed
            with Flutter for both iOS and Android.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-black">Flutter</Badge>
            <Badge className="bg-blue-800">Dart</Badge>
            <Badge className="bg-red-800">AWS Cognito</Badge>
            <Badge className="bg-gray-600">AWS Amplify</Badge>
            <Badge className="bg-blue-800">REST</Badge>
            <Badge className="bg-green-800">dio</Badge>
            <Badge className="bg-yellow-800">Provider</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-[#ffdc74] to-[#abecd6] rounded-lg p-8">
          <Image src={gbmobile} alt="greenbii mobile" />
        </div>
      </Card>

      {/* PowerZone Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div className="w-full h-full bg-gradient-to-r from-[#ffd04e] to-[#ffb0b0] rounded-lg p-8">
          <Image src={pz} alt="powerzone" />
        </div>
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">Power Zone Batteries Website</h1>
          <p className="text-muted-foreground">
            This website is a personal website for Cleanmeter Systems for
            distribution of Solar batteries to its customers. I teamed up with
            the Cleanmeter developer team to develop this website.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-black">Astro</Badge>
            <Badge className="bg-blue-800">Python</Badge>
            <Badge className="bg-red-800">Fastapi</Badge>
            <Badge className="bg-gray-600">Firestore</Badge>
            <Badge className="bg-blue-800">Tailwind</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Greenbii Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">Greenbii ERP Sofware</h1>
          <p className="text-muted-foreground">
            This website is developed to cater for businesses to easily manage
            their business activities. I am part of the Greenbii team as at when
            this website was developed. We came together to work in a sprint in
            other to achieve this working software.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-black">Angular</Badge>
            <Badge className="bg-blue-800">Typescript</Badge>
            <Badge className="bg-red-800">Nodejs</Badge>
            <Badge className="bg-gray-600">AWS</Badge>
            <Badge className="bg-yellow-400">HTML</Badge>
            <Badge className="bg-blue-800">CSS</Badge>
            <Badge className="bg-black">Bootstrap</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-[#fbed96] to-[#abecd6] rounded-lg p-8">
          <Image src={gbweb} alt="greenbii web" />
        </div>
      </Card>

      {/* Greenbii StoreFront Project */}
      <Card className="my-7 flex justify-between items-center gap-7">
        <div className="w-full h-full bg-gradient-to-r from-[#fbed96] to-[#abecd6] rounded-lg p-8">
          <Image src={storefront} alt="project1" />
        </div>
        <div>
          <Badge className="bg-gray-500 mb-5">Private Github Project</Badge>
          <h1 className="text-2xl font-bold">Greenbii Storefront Software</h1>
          <p className="text-muted-foreground">
            This is an Ecommerce platform for users to buy and sell. Users can
            easily make payment before delivery or on delivery and each order
            made is being managed by the store owner who is entitled to a
            dashboard. This web app was made privately for Greenbii as part of
            their software collections.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 my-4">
            <Badge className="bg-black">Nextjs 14</Badge>
            <Badge className="bg-blue-800">Typescript</Badge>
            <Badge className="bg-red-800">React</Badge>
            <Badge className="bg-gray-600">React Query</Badge>
            <Badge className="bg-yellow-400">Tailwind</Badge>
            <Badge className="bg-blue-800">Shadcn-ui</Badge>
          </div>
          <div className="flex justify-start items-center mt-7">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Projects;
