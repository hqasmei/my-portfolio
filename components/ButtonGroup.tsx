import React, { useState } from "react";

interface ButtonGroupProps {
  buttons: { [key: string]: number };
  setFilter: (key: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, setFilter }) => {
  const [activeButton, setActiveButton] = useState("all");

  const handleClick = (key: string) => {
    setFilter(key);
    setActiveButton(key);
  };

  return (
    <div className="max-w-3xl">
      <div className="flex overflow-x-auto pb-4 md:pb-0">
        <div className="mb-4 flex-none space-x-4">
          {Object.keys(buttons).map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`rounded-lg border-2 px-4 py-2 text-white shadow-lg hover:bg-stone-700 ${
                activeButton === key
                  ? "border-stone-700 bg-stone-700"
                  : "border-stone-600 bg-stone-800"
              }`}
              // className="rounded-lg border-2 border-stone-600 bg-stone-800 px-4 py-2 text-white shadow-lg hover:bg-stone-700"
            >
              <div className="flex flex-row items-center space-x-2">
                <span className="md:text-md text-sm">
                  {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                </span>
                <span className="md:text-md text-sm">
                  {" ("}
                  {buttons[key]}
                  {")"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
