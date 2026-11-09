import type { ChangeEvent, ComponentProps } from "react";

interface CalendarItemProps extends Omit<ComponentProps<"input">, "onChange" | "value"> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function CalendarItem({
  value,
  onChange,
  className,
  ...props
}: CalendarItemProps) {
  return (
    <div className={`flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 border border-neutral-200 shadow-sm ${className ?? ""}`}>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="bg-transparent text-sm font-medium text-neutral-800 outline-none cursor-pointer"
        {...props}
      />
    </div>
  );
}