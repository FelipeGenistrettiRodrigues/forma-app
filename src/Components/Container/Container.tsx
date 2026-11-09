import type { ComponentProps, ElementType, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const containerVariants = tv({
  base: "mx-auto w-full px-4",
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-[62rem]",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof containerVariants> &
  Omit<ComponentProps<T>, "as" | "size" | "className" | "children">;

export function Container<T extends ElementType = "div">({
  as,
  size,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={containerVariants({ size, className })}
      {...props}
    >
      {children}
    </Component>
  );
}