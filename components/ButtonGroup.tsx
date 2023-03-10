import React from "react"

interface ButtonGroupProps {
  buttons: { [key: string]: number }
  setFilter: (key: string) => void
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, setFilter }) => {
  const handleClick = (key: string) => {
    setFilter(key)
  }

  return (
    <div className="flex overflow-x-auto space-x-4">
      {Object.keys(buttons).map((key) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          className="px-4 py-2 bg-stone-800 text-white rounded-lg shadow-lg hover:bg-stone-700"
        >
          <div className="flex flex-row space-x-2 items-center">
            <span className="text-sm md:text-md">
              {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
            </span>
            <span className="text-sm md:text-md">
              {" ("}
              {buttons[key]}
              {")"}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
