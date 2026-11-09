import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textAreaVariants = tv({
    base: `p-2 rounded-md shadow-sm border border-gray-300 placeholder:text-neutral-400 focus:outline-none focus:border-[#c7d95b] 
    focus:ring-2 focus:ring-[#E9F3B7]/60 transition-all duration-150 resize-none`,
});

interface TextAreaProps extends ComponentProps<"textarea">, VariantProps<typeof textAreaVariants>{
    classname?:string;
    label?:string;
}

export function TextArea({
    className, label,...props
}:TextAreaProps) {

    return (
        <>
            {label && <label>{label}</label>}
            <textarea className={textAreaVariants({className: "w-full"})} {...props}/>
        </>
    )
}