import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack900: "border border-black_900 border-solid",
  OutlineGray600: "border border-gray_600 border-solid",
};
const shapes = {
  CircleBorder31: "rounded-radius31",
  CircleBorder42: "rounded-radius42",
};
const sizes = {
  sm: "p-[11px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
  md: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["CircleBorder31", "CircleBorder42"]),
  variant: PropTypes.oneOf(["OutlineBlack900", "OutlineGray600"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CircleBorder31",
  variant: "OutlineBlack900",
  size: "sm",
};

export { Input };
