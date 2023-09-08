import React from "react";

interface InputProps {
  value: string;
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  label,
  placeholder,
  type,
  onChange,
  value,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="p-2  border-solid border border-action rounded-sm hover:border-black">
        <input
          value={value}
          id={id}
          type={type}
          placeholder={placeholder || ""}
          className=" border-none outline-none "
          onChange={onChange}
        />
      </div>
    </div>
  );
}
