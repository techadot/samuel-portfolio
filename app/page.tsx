import Container from "@/components/container";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Container className="pt-[160px]">
      <Hero />
      <Projects />
      <Skills />
    </Container>
  );
}
