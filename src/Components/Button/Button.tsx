import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: "px-[20px] py-1 flex items-center justify-center cursor-pointer transition rounded",
    variants:{
        variant:{
            primary:"bg-[#D9FF4F] hover:bg-[#E3FF7A] text-black",
            secondary: "bg-[#111111] hover:bg-[#242621] transition",
            tertiary: "bg-[#D8D9D1] hover:bg-[#FAF9F5] transition ease-in"
        },
        disabled: {
            true: "opacity-50 cursor-not-allowed pointer-events-none",
            false: "",
        },
    },
    defaultVariants:{
        variant: "primary",
        disabled: false
    }
});

interface ButtonProps extends Omit<ComponentProps<"button">, "disabled">, VariantProps<typeof buttonVariants>{
    children:ReactNode,
    className?:string
}

export function Button({
    children, className, variant, disabled,...props
}:ButtonProps) {

    return (
        <button disabled={disabled} {...props} className={buttonVariants({variant, disabled, className})}>
            {children}
        </button>
    )
}