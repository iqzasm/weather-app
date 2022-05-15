import { useState } from "react";

export function useInput({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder?: string;
}) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
  return [value, input];
}
