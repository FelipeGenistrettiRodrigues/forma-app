import { useState, type ChangeEvent, type FormEvent } from "react";
import { EntityTypes } from "../../Pages/PageHome";
import { GoalsTrain, TrainObjectives } from "../GoalsTrain/GoalsTrain";
import { InputText } from "../InputText/InputText";
import { FrequenciaTreinoType, Select } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";

interface CreateTrainModalProps {
  entityType: EntityTypes;
  onClose: () => void;
}

export function CreateTrainModal({ entityType, onClose }: CreateTrainModalProps) {
  const [selectedGoal, setSelectedGoal] = useState<TrainObjectives>(TrainObjectives.Hipertrofia);
  const [nomeTreino, setNomeTreino] = useState<string>("Treino de força");
  const [frequenciaTreino, setFrequenciaTreino] = useState<FrequenciaTreinoType>(FrequenciaTreinoType.Moderado);
  const [observacoes, setObservacoes] = useState<string>("");
  const form = useForm();

  function handleInputNome(e: ChangeEvent<HTMLInputElement>) {
    setNomeTreino(e.target.value);
  }

  function handleFrequenciaTreino(e: ChangeEvent<HTMLSelectElement>) {
    setFrequenciaTreino(e.target.value as FrequenciaTreinoType);
  }

  function handleObservacoesTreino(e: ChangeEvent<HTMLTextAreaElement>) {
    setObservacoes(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novoTreino = {
      entityType,
      nome: nomeTreino,
      frequencia: frequenciaTreino,
      objetivo: selectedGoal,
      observacoes,
    };

    console.log("Submetendo treino:", novoTreino);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-2 gap-2 w-full">
        <InputText
          value={nomeTreino}
          onChange={handleInputNome}
          placeholder="Insira o nome do treino"
          className="w-full"
          label="Nome"
        />

        <Select
          value={frequenciaTreino}
          onChange={handleFrequenciaTreino}
          className="w-full"
          label="Frequência"
        />

        <div className="col-span-2 mt-[10px]">
          <GoalsTrain entityType={EntityTypes.NovoTreino} value={selectedGoal} onSelect={setSelectedGoal} />
        </div>
      </div>

      <div>
        <TextArea
          value={observacoes}
          onChange={handleObservacoesTreino}
          label="Observações"
          maxLength={255}
          placeholder="Ex: priorizar exercícios compostos..."
        />
      </div>

      <div className="flex gap-2 justify-end mt-2">
        <Button type="button" onClick={onClose} variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">
          Criar treino
        </Button>
      </div>
    </form>
  );
}