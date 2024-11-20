import React, { useState, useEffect } from "react";

interface PillListProps {
  label: string;
  required?: boolean;
  value: string[];
  onChange: (values: string[]) => void;
}

export const PillList: React.FC<PillListProps> = ({
  label,
  required = false,
  value = [],
  onChange,
}) => {
  const [pills, setPills] = useState<string[]>(value);

  useEffect(() => {
    setPills(value);
  }, [value]);

  const handleDelete = (indexToRemove: number) => {
    const newPills = pills.filter((_, index) => index !== indexToRemove);
    setPills(newPills);
    onChange(newPills);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = event.currentTarget.value.trim();
      if (value) {
        if (!pills.includes(value)) {
          const newPills = [...pills, value];
          setPills(newPills);
          onChange(newPills);
          event.currentTarget.value = "";
        }
      }
    }
  };

  return (
    <div className="col-span-6">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-2 flex flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white p-1">
        {pills.map((pill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 rounded bg-white px-1 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-gray-200"
          >
            {pill}
            <button
              type="button"
              onClick={() => handleDelete(index)}
              className="text-lg font-semibold leading-none text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          className="min-w-[200px] flex-1 border-0 p-1 text-sm focus:outline-none focus:ring-0"
          placeholder="Type and press Enter to add"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
