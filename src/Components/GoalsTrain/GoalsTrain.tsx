import type { ComponentProps } from "react";
import { Text } from "../Text/Text";
import { tv, type VariantProps } from "tailwind-variants";
import { EntityTypes } from "../../Pages/PageHome";

export const goalsTrainVariants = tv({
  base: "flex items-center justify-center text-center p-2 rounded-md border border-gray-300 cursor-pointer select-none transition-colors duration-150 text-sm font-medium",
  variants: {
    variant: {
      default: "bg-white hover:bg-neutral-50 text-neutral-700",
      selected: "bg-[#E9F3B7] border-[#b5c76c] text-neutral-900 font-semibold"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export enum TrainObjectives {
  Hipertrofia = "Hipertrofia",
  Forca = "Força",
  Resistencia = "Resistência"
}

export enum DietObjectives {
  Definicao = "Definição",
  GanhoDeMassa = "Ganho de massa",
  Manutencao = "Manutenção"
}

export type AnyObjective = TrainObjectives | DietObjectives;

export const goalsTrainMap: Record<TrainObjectives, string> = {
  [TrainObjectives.Hipertrofia]: "Hipertrofia",
  [TrainObjectives.Forca]: "Força",
  [TrainObjectives.Resistencia]: "Resistência"
};

export const goalsDietMap: Record<DietObjectives, string> = {
  [DietObjectives.Definicao]: "Definição",
  [DietObjectives.GanhoDeMassa]: "Ganho de massa",
  [DietObjectives.Manutencao]: "Manutenção"
};

interface GoalsTrainProps 
  extends Omit<ComponentProps<"div">, "onSelect">, 
    VariantProps<typeof goalsTrainVariants> {
  className?: string;
  itemClassName?: string;
  value?: AnyObjective;
  entityType: EntityTypes;
  onSelect: (objective: any) => void;
}

export function GoalsTrain({
  className,
  itemClassName,
  value,
  entityType,
  onSelect,
  ...props
}: GoalsTrainProps) {
  const currentMap = entityType === EntityTypes.NovoTreino ? goalsTrainMap : goalsDietMap;

  return (
    <div className={`flex flex-col gap-1 w-full ${className ?? ""}`} {...props}>
      <Text className="text-sm font-medium text-neutral-700">Objetivo</Text>
      
      <div className="grid grid-cols-3 gap-2 mt-1 w-full">
        {Object.entries(currentMap).map(([key, label]) => {
          const isSelected = value === key;

          return (
            <div
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(key as AnyObjective)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelect(key as AnyObjective);
                }
              }}
              className={goalsTrainVariants({
                variant: isSelected ? "selected" : "default",
                className: itemClassName
              })}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}