import React from "react"

export const ButtonGroup = (props) => {
  const { button, filter } = props
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            key={i}
            onClick={() => filter(cat)}
            className="btn"
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
