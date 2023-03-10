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
    <div className="max-w-3xl">
      <div className="overflow-x-auto flex pb-4 md:pb-0">
        <div className="flex-none space-x-4">
          {Object.keys(buttons).map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className="px-4 py-2 bg-stone-800 border-2 border-stone-600 text-white rounded-lg shadow-lg hover:bg-stone-700"
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
      </div>
    </div>
  )
}

export default ButtonGroup
