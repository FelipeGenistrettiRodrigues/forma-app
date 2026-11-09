import { Card } from "../Card/Card";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Text } from "../Text/Text";

interface GoalCardProps {
  totalTreinos: number;
  treinosRealizados: number;
  className?: string;
}

export function GoalCard({
  totalTreinos,
  treinosRealizados,
  className = "",
}: GoalCardProps) {
  return (
    <Card className={`bg-[#20221E] p-4 rounded-xl flex flex-col gap-3 ${className}`}>
      <div>
        <Text className="uppercase" variant="heading-section">
          meta do mês
        </Text>
      </div>
      <ProgressBar
        totalTreinos={totalTreinos}
        treinosRealizados={treinosRealizados}
      />
    </Card>
  );
}