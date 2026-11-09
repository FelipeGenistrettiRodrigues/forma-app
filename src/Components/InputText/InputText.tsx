import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
    base: "border border-gray-300 rounded-md p-2",
});

interface InputTextProps extends ComponentProps<"input">, VariantProps<typeof inputVariants>{
    className?:string;
    label?:string;
    error?:string;
}

export function InputText({
    className, label, error, ...props
}:InputTextProps) {

    return (
        <div className="flex flex-col">
            {label && <label>{label}</label>}
            <input className={inputVariants({className})} {...props} />
        </div>
    )
}