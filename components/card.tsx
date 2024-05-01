import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-gray-100 shadow-sm border border-gray-50 rounded-lg p-5 md:p-10 dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
