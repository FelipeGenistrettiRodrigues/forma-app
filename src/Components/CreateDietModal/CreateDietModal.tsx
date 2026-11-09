import { useState, type ChangeEvent } from "react";
import { EntityTypes } from "../../Pages/PageHome"
import { GoalCard } from "../GoalCard/GoalCard";
import { DietObjectives, GoalsTrain } from "../GoalsTrain/GoalsTrain";
import { InputText } from "../InputText/InputText";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";

interface CreateDietModalProps {
    entityType: EntityTypes;
    onClose: () => void;
}

export function CreateDietModal({
    entityType,
    onClose,
    ...props
}:CreateDietModalProps) {

    const [selectedGoal, setSelectedGoal] = useState<DietObjectives>(DietObjectives.GanhoDeMassa);
    const [nomeDieta, setNomeDieta] = useState<string>("Dieta para ganhar massa");
    const [metaKcal, setMetaKcal] = useState<string>();

    function handleNomeDieta(e: ChangeEvent<HTMLInputElement>){
        const event = e.target.value;
        setNomeDieta(event);
    }

    function handleMetaKcal(e: ChangeEvent<HTMLInputElement>) {
        const onlyDigits = e.target.value.replace(/\D/g, "");
        setMetaKcal(onlyDigits);
    }


    return (
        <>
            <div className="gap-2 grid grid-cols-2 w-full">
                <InputText onChange={handleNomeDieta} value={nomeDieta} label="Nome" />
                <div className="relative flex flex-col gap-1 w-full">
                <InputText
                    value={metaKcal}
                    onChange={handleMetaKcal}
                    label="Meta diária"
                    placeholder="Ex: 3000"
                    type="text"
                    inputMode="numeric"
                    className="w-full pr-12" 
                />
                <span className="absolute right-3 top-[34px] text-xs font-semibold text-neutral-400 pointer-events-none select-none">
                    kcal
                </span>
                </div>
            </div>
            <div>
                <GoalsTrain value={selectedGoal} onSelect={setSelectedGoal} entityType={EntityTypes.NovaDieta} />
            </div>
            <div>
                <TextArea label="Observações" placeholder="Ex: Beber mais do que 2.5L de água por dia..." maxLength={255}/>
            </div>
            <div className=" flex gap-2 justify-end mt-[10px]">
                <Button  onClick={onClose} variant="tertiary">Cancelar</Button>
                <Button type="button">Criar dieta</Button>
            </div>
        </>
    )
}