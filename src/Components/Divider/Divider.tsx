import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const dividerVariants = tv({
  base: "shrink-0 bg-gray-300",
  variants: {
    orientation: {
      horizontal: "w-full h-px my-2",
      vertical: "h-5 w-px self-center"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

interface DividerProps extends ComponentProps<"div">, VariantProps<typeof dividerVariants> {
  className?: string;
}

export function Divider({
  orientation,
  className,
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      className={dividerVariants({ orientation, className })}
      {...props}
    />
  );
}