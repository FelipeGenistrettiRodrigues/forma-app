import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const selectVariants = tv({
    base:"flex flex-col border border-gray-300 w-full rounded-md p-2"
});

interface SelectProps extends ComponentProps<"select">, VariantProps<typeof selectVariants> {
    className?:string;
    label?:string;
}

export enum FrequenciaTreinoType {
    Leve = "Leve",
    Moderado = "Moderado",
    Avancado = "Avançado"
}

const frequenciaOptions : Record<FrequenciaTreinoType, string> = {
    [FrequenciaTreinoType.Leve] : "3x por semana",
    [FrequenciaTreinoType.Moderado] : "4x por semana",
    [FrequenciaTreinoType.Avancado] : "5x por semana"
}

export function Select({
    label, className, ...props
}:SelectProps) {

    return (
        <div>
            {label && <label>{label}</label>}
            <select className={selectVariants({ className })} {...props}>
            {Object.entries(frequenciaOptions).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
            </select>
        </div>
    )
}