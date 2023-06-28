interface ButtonProps {
  variant: "primary" | "outline" | "ghost";
  label: string;
}

export function Button({ variant, label }: ButtonProps) {
  switch (variant) {
    case "primary":
      return (
        <button
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
        </button>
      );
    case "outline":
      return (
        <button
          className="
         bg-bgl
         border
         rounded 
         border-action
         text-bgd 
         font-semibold
         px-9 
         py-3 
         drop-shadow-my
         hover:bg-actdark
         "
        >
          {label}
        </button>
      );
    default:
      return (
        <button className="bg-actdark rounded px-9 py-3 drop-shadow-my">
          {label}
        </button>
      );
  }
}

export default Button;
