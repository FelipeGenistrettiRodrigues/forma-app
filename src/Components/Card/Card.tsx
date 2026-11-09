import type { ComponentProps, ElementType, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardVariants = tv({
    base: "rounded transition",
    variants:{
        variant:{
            primary:"bg-white shadow-lg rounded-md p-3"
        }
    },
    defaultVariants:{
        variant:"primary"
    }
});

interface CardProps extends ComponentProps<"div">, VariantProps<typeof cardVariants>{
    children:ReactNode;
    className?:string
    as?:ElementType;
}

export function Card({
    children, className, as :Component ="div", variant,...props
}:CardProps) {

    return (
        <Component className={cardVariants({variant, className})} {...props}>
            {children}
        </Component>
    )
}