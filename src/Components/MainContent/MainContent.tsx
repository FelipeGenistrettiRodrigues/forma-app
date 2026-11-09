import type { ComponentProps, ReactNode } from "react";

interface MainContentProps extends ComponentProps<"main"> {
    children:ReactNode,
    className?:string,
}

export function MainContent({
    children, className, ...props
}:MainContentProps) {

    return(
        <main {...props} className="bg-[#F3F1EB] min-h-screen w-full">
            {children}
        </main>
    )
}