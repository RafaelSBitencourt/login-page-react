import { ReactNode } from "react";

interface CardProps {
  size: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Card({ children, size }: CardProps) {
  const sizeApplied =
    size === "sm"
      ? "h-40 w-20 "
      : size === "md"
      ? "h-4/6 w-3/6"
      : "h-full w-full";
  return (
    <div
      className={`${sizeApplied} bg-white border-solid border border-action rounded-sm drop-shadow-my`}
    >
      {children}
    </div>
  );
}
