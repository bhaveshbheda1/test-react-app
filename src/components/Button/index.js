import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder21: "rounded-radius21",
  CircleBorder31: "rounded-radius31",
  CircleBorder41: "rounded-radius41",
};
const variants = {
  FillGray100: "bg-gray_100 text-gray_900",
  FillGray901: "bg-gray_901 text-white_A700",
  OutlineGray900: "border border-gray_900 border-solid text-gray_900",
  FillGreen801: "bg-green_801 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
};
const sizes = {
  sm: "p-[4px]",
  md: "xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px]",
  lg: "p-[11px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder21",
    "CircleBorder31",
    "CircleBorder41",
  ]),
  variant: PropTypes.oneOf([
    "FillGray100",
    "FillGray901",
    "OutlineGray900",
    "FillGreen801",
    "FillGray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder21",
  variant: "FillGray100",
  size: "md",
};

export { Button };
