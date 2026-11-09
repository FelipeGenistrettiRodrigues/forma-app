import { useState, type ComponentProps } from "react";
import { Text } from "../Components/Text/Text";
import { useDate } from "../context/DateContext";
import { CreateEntity } from "../Components/CreateEntity/CreateEntity";
import { ModalCreateEntity } from "../Components/ModalCreateEntity/ModalCreateEntity";
import { CreateTrainModal } from "../Components/CreateTrainModal/CreateTrainModal";
import { CreateDietModal } from "../Components/CreateDietModal/CreateDietModal";

export enum EntityTypes {
  NovoTreino = "NovoTreino",
  NovaDieta = "NovaDieta"
}

interface PageHomeProps extends ComponentProps<"div"> {
  className?: string;
}

export function PageHome({ className, ...props }: PageHomeProps) {
  const { diaSemanaCompleto } = useDate();
  
  const [activeModal, setActiveModal] = useState<EntityTypes | null>(null);

  const modalTitles: Record<EntityTypes, string> = {
    [EntityTypes.NovoTreino]: "Criar Novo Treino",
    [EntityTypes.NovaDieta]: "Criar Nova Dieta"
  };

  return (
    <div {...props} className={className}>
      <Text variant="heading-section">{`${diaSemanaCompleto}.`}</Text>

      <div className="flex flex-col mt-[10px]">
        <Text variant="heading-paragraph">Bom dia, Felipe.</Text>
        <Text className="text-gray-400 font-semibold" variant="heading-paragraph">
          Vamos evoluir?
        </Text>

        <div className="flex justify-between items-center mt-2">
          <Text variant="paragraph-medium">
            Você está a 2 treinos de bater sua melhor semana.
          </Text>

          <div className="flex gap-2">
            <CreateEntity
              onClick={() => setActiveModal(EntityTypes.NovoTreino)}
              entityType={EntityTypes.NovoTreino}
            />
            <CreateEntity
              onClick={() => setActiveModal(EntityTypes.NovaDieta)}
              entityType={EntityTypes.NovaDieta}
            />
          </div>
        </div>
      </div>

      <ModalCreateEntity
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? modalTitles[activeModal] : ""}
      >
       { activeModal === EntityTypes.NovoTreino ? <CreateTrainModal onClose={() => setActiveModal(null)} entityType={EntityTypes.NovoTreino}/> : <CreateDietModal onClose={() => setActiveModal(null)} entityType={EntityTypes.NovaDieta} />}
        
      </ModalCreateEntity>
    </div>
  );
}