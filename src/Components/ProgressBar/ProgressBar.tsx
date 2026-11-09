
interface ProgressBarProps {
    treinosRealizados: number;
    totalTreinos: number;
    className?:string;
}

export function ProgressBar({
    treinosRealizados, totalTreinos, className, ...props
}:ProgressBarProps) {

    const porcentagem = totalTreinos > 0 ? Math.min(Math.max((treinosRealizados / totalTreinos) * 100, 0), 100) : 0;

    const treinosRestantes = Math.max(totalTreinos - treinosRealizados, 0);

    return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-white leading-none">
          {treinosRealizados}
        </span>
        <span className="text-sm text-zinc-400 font-medium">
          / {totalTreinos} treinos
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-[#D9FF4F] transition-all duration-500 ease-out"
          style={{ width: `${porcentagem}%` }}
        />
      </div>

      <span className="text-xs text-zinc-400">
        {treinosRestantes > 0
          ? `Faltam ${treinosRestantes} treinos. Continue!`
          : "Meta concluída! Parabéns!"}
      </span>
    </div>
  );

}