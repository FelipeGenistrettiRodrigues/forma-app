import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import SearchIcon from "../../assets/icons/lupa.svg?react";
import Icon from "../Icon/Icon";

const inputSearchVariants = tv({
    base: `border-b border-gray-400 bg-transparent outline-none 
         focus:border-gray-300 transition-colors`,
    variants:{
        size:{
            md:"h-10 px-3"
        },
    },
    defaultVariants:{
        size:"md"
    }
});

interface SearchProps extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof inputSearchVariants>{
    className?:string
}

export function Search({
    className, size,...props
}:SearchProps){

    return (
        <div className="flex items-center space-x-2">
            <Icon svg={SearchIcon} />
            <input className={inputSearchVariants({size, className})} type="text" {...props}/>
        </div>
    )
}