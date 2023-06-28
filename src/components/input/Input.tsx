interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
}

export function Input({ id, label, placeholder, type }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="p-2  border-solid border-2 border-action rounded-sm  ">
        <input
          id={id}
          type={type}
          placeholder={placeholder || ""}
          className=" border-none outline-none "
        />
      </div>
    </div>
  );
}