import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ type, icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { handleClicked } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => handleClicked({ type })}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
