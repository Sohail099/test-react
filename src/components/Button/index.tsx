import clsx from "clsx";
import React, { ReactNode } from "react";

import Spinner from "../Spinner";
import Typography from "../Typography";
import { ITextSize, ITextWeight } from "../Typography/interface";
import { ButtonColor, getButtonColor } from "./interface";

type Props = {
  label?: string;
  type?: "submit" | "reset" | "button";
  padding?: "md" | "lg" | "xl";
  icon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  color?: ButtonColor;
  weight?: ITextWeight;
  fontSize?: ITextSize;
  onClick?: () => void;
};

const Button = ({
  label,
  type = "submit",
  icon,
  fullWidth = false,
  padding = "lg",
  color = "primary",
  loading = false,
  disabled = false,
  weight,
  fontSize,
  onClick = () => {}
}: Props) => {
  const colorClasses = getButtonColor(color);
  return (
    <button
      data-testid={`button-${label}`}
      type={type}
      className={clsx(
        fullWidth ? "w-full" : "w-fit",
        [
          padding === "md" && "py-0.5 px-3 rounded-md",
          padding === "lg" && "py-2 px-4 rounded-lg",
          padding === "xl" && "py-2 px-5 md:px-9 rounded-lg"
        ],
        `${colorClasses} drop-shadow-sm flex justify-center items-center focus:outline-none disabled:bg-slate-200/70 disabled:cursor-not-allowed hover:shadow-bottom-sm hover:shadow-slate-300`
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <Spinner reverse noMargin />
      ) : (
        <Typography
          customColorClass={
            !(disabled || color === "neutral" || color === "white")
              ? "text-slate-50"
              : disabled
              ? "text-slate-500"
              : undefined
          }
          weight={weight}
        >
          <span
            className={clsx(
              "flex justify-center items-center text-center gap-1",
              `text-${fontSize}`
            )}
          >
            {icon}
            {label}
          </span>
        </Typography>
      )}
    </button>
  );
};

export default Button;
