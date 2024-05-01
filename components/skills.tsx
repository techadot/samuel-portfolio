import Image from "next/image";
import Container from "./container";

import js from "@/public/images/javascript.png";
import ts from "@/public/images/typescript.png";
import react from "@/public/images/react.png";
import node from "@/public/images/node.png";
import nextjs from "@/public/images/nextjs.png";
import tailwind from "@/public/images/tailwindcss.png";
import msSql from "@/public/images/my-sql.png";
import prisma from "@/public/images/prisma.png";
import shadcn from "@/public/images/shadcn.png";
import supabase from "@/public/images/supabase.png";
import postgres from "@/public/images/postgresql.png";
import angular from "@/public/images/angular.png";
import figma from "@/public/images/figma.png";
import python from "@/public/images/python.png";
import flutter from "@/public/images/flutter.png";

const Skills = () => {
  return (
    <div className="px-0 py-10 pb-28">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="text-muted-foreground">
        The Skills, tools and technologies I am really good at!
      </p>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 mt-6 text-center">
        <div>
          <div className="bg-yellow-50 p-2 rounded-[10px]">
            <Image src={js} alt="javascript" />
          </div>
          <p className="text-muted-foreground">Javascript</p>
        </div>

        <div>
          <div className="bg-blue-50 p-2 rounded-[10px]">
            <Image src={ts} alt="typescript" />
          </div>
          <p className="text-muted-foreground">Typescript</p>
        </div>

        <div>
          <div className="bg-cyan-50 p-2 rounded-[10px]">
            <Image src={react} alt="react" />
          </div>
          <p className="text-muted-foreground">React</p>
        </div>

        <div>
          <div className="bg-green-50 p-2 rounded-[10px]">
            <Image src={node} alt="node js" />
          </div>
          <p className="text-muted-foreground">NodeJs</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={nextjs} alt="nextjs" />
          </div>
          <p className="text-muted-foreground">Nextjs</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={tailwind} alt="tailwind" />
          </div>
          <p className="text-muted-foreground">Tailwind</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={msSql} alt="my sql" />
          </div>
          <p className="text-muted-foreground">My Sql</p>
        </div>

        <div>
          <div className="bg-blue-50 p-2 rounded-[10px]">
            <Image src={prisma} alt="prisma" />
          </div>
          <p className="text-muted-foreground">Prisma</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={supabase} alt="supabase" />
          </div>
          <p className="text-muted-foreground">Supabase</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={shadcn} alt="shadcn" />
          </div>
          <p className="text-muted-foreground">Shadcn UI</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={postgres} alt="postgres" />
          </div>
          <p className="text-muted-foreground">Postgres</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={angular} alt="angular" />
          </div>
          <p className="text-muted-foreground">Angular</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={figma} alt="figma" />
          </div>
          <p className="text-muted-foreground">Figma</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={python} alt="python" />
          </div>
          <p className="text-muted-foreground">Python</p>
        </div>

        <div>
          <div className="bg-slate-50 p-2 rounded-[10px]">
            <Image src={flutter} alt="flutter" />
          </div>
          <p className="text-muted-foreground">Flutter</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
