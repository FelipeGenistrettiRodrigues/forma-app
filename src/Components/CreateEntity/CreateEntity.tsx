import CreateIcon from "../../assets/icons/adicionar.svg?react"
import { EntityTypes } from "../../Pages/PageHome";
import Icon from "../Icon/Icon"
import { Text } from "../Text/Text"

interface CreateEntityProps {
    entityType?: EntityTypes;
    onClick?: () => void;
}

export function CreateEntity({
    entityType,
    onClick
}:CreateEntityProps) {

    const mapToLabel: Record<EntityTypes, string> = {
        [EntityTypes.NovoTreino]: "Novo treino",
        [EntityTypes.NovaDieta]: "Nova dieta"
    };

    return (
        <div onClick={onClick} className="group bg-white p-2 rounded-md shadow-md flex gap-2 items-center justify-center w-[150px] h-[50px] cursor-pointer">
            <div className="bg-gray-300 rounded-md group-hover:bg-[#D9FF4F] transition ease-in p-1">
                <Icon svg={CreateIcon} />
            </div>
            {<Text>{mapToLabel[entityType!]}</Text>}
        </div>
    )
}