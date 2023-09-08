import React, { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outline" | "ghost";
  label: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Button({ variant, label, onClick, children }: ButtonProps) {
  switch (variant) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className="
        bg-action 
        text-bgl
        font-semibold 
        rounded 
        px-9 
        py-3 
        drop-shadow-my
        hover:bg-actdark
        "
        >
          {label}
          {children && children}
        </button>
      );
    case "outline":
      return (
        <button
          onClick={onClick}
          className="
         bg-bgl
         border
         rounded 
         border-action
         text-action 
         font-semibold
         px-9 
         py-3 
         drop-shadow-my
         hover:bg-actdark
         hover:border-transparent         
         "
        >
          {label}
          {children && children}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          className="bg-actdark rounded px-9 py-3 drop-shadow-my"
        >
          {label}
          {children && children}
        </button>
      );
  }
}

export default Button;
