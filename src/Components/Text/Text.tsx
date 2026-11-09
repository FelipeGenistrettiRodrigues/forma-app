import type { ComponentProps, ElementType, ReactNode } from "react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
    base:"inline-flex font-sans",
    variants:{
        variant:{
            "heading-paragraph": "text-black font-bold text-4xl leading-[130%]",
            "heading-section": "text-md font-semibold leading-[130%]",
            "paragraph-medium": "text-base font-normal leading-[140%]"
        }
    },
    defaultVariants:{
        variant:"paragraph-medium"
    }
})

interface TextProps extends ComponentProps<"text">, VariantProps<typeof textVariants>{
    as?:ElementType,
    className?:string,
    children:ReactNode,
}

export function Text({
    as="p", className, children, variant,...props
}: TextProps) {
    return React.createElement(
        as,{
            className: textVariants({variant, className}),
            ...props
        },
        children
    )
}