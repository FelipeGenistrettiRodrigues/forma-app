import type { ComponentProps, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Logo from "../../assets/logo.svg?react";
import { Text } from "../../Components/Text/Text";
import { AsideList } from "../../Components/AsideList/AsideList";
import { Card } from "../../Components/Card/Card";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Divider } from "../../Components/Divider/Divider";
import { GoalCard } from "../../Components/GoalCard/GoalCard";
import { ProfileInformation } from "../../Components/ProfileInformation/ProfileInformation";

export const asideVariants = tv({
  base: "flex h-screen w-64 shrink-0 flex-col items-center border-r border-zinc-800/80 bg-[#111111] p-5 text-zinc-400",
  variants: {
    collapsed: {
      true: "w-20 items-center p-4",
      false: "w-64",
    },
  },
  defaultVariants: {
    collapsed: false,
  },
});

export interface AsideProps
  extends ComponentProps<"aside">,
    VariantProps<typeof asideVariants> {
  as?: ElementType;
}

export function Aside({
  as: Component = "aside",
  className,
  collapsed,
  children,
  ...props
}: AsideProps) {
  return (
    <Component
      className={asideVariants({ collapsed, className })}
      {...props}
    >
        <Logo/>

        <div className="mt-[15px]">
           <AsideList/>
        </div>

        <div className="mt-auto w-full">
          <GoalCard totalTreinos={18} treinosRealizados={17} />
        </div>

        <Divider className="mt-[15px]" orientation="horizontal"/>

        <div>
          <ProfileInformation userName="Felipe Genistretti" planoUser="Plano Pro" />
        </div>

    </Component>
  );
}