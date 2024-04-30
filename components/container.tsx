import { cn } from "@/lib/utils";
import { Children } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};

export default Container;
