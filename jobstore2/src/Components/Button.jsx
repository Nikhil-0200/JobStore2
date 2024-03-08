// Button.jsx

import React from "react";

const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className={`flex items-center justify-center px-4 py-3 font-poppins-medium text-md leading-none border rounded-md ${
        props.backgroundColor
          ? `${props.backgroundColor} ${props.borderColor} ${props.textColor} ${props.textSize} ${props.width} `
          : "bg-coral-red border text-black"
      }`}
      onClick={handleClick}
    >
      <p>{props.label}</p>
    </button>
  );
};

export default Button;
