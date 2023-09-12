import { ReactNode } from "react";

interface CardProps {
  size: "sm" | "md" | "lg";
  absolute?: boolean;
  children: ReactNode;
}

export function Card({ children, size, absolute }: CardProps) {
  const sizeApplied =
    size === "sm"
      ? "md:h-40 md:w-20 h-36 w-28"
      : size === "md"
      ? "md:h-4/6 md:w-4/6 sm:w-28 sm:h-5/6"
      : "h-full w-full";
  return (
    <div
      className={`${sizeApplied} ${
        absolute && "absolute"
      } bg-white border-solid border border-action rounded-sm drop-shadow-my`}
    >
      {children}
    </div>
  );
}
