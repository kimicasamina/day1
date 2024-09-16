import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = ["Health", "Career", "Productivity"];

export default function Select({ options }) {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem value={item}>{item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
