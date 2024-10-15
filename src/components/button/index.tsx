import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "../utils";

const buttonStyles = cva(["w-full", "rounded-md"], {
  variants: {
    variant: {
      solid: "",
      outline: "border-2",
    },
    size: {
      sm: "px-4",
    },
  },
});
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;
export const Button = ({ variant, size, ...props }: ButtonProps) => {
  return <button className={cn(buttonStyles({ variant, size }))} {...props} />;
};
