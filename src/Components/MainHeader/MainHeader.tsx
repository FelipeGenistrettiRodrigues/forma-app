import type { ChangeEvent, ComponentProps, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Search } from "../Search/Search";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { CalendarItem } from "../CalendarItem/CalendarItem";
import { useDate } from "../../context/DateContext";
import { Divider } from "../Divider/Divider";
import { Profile } from "../Profile/Profile";

const mainHeaderVariants = tv({
  base: ""
});

interface MainHeaderProps extends ComponentProps<"header">, VariantProps<typeof mainHeaderVariants> {
  as?: ElementType;
  className?: string;
}

export function MainHeader({
  as: Component = "header",
  className,
  ...props
}: MainHeaderProps) {
  const { isoDate, setSelectedDate } = useDate();

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    if (!valor) return;

    const [ano, mes, dia] = valor.split("-").map(Number);
    setSelectedDate(new Date(ano, mes - 1, dia));
  }

  return (
    <>
      <Component
        className="flex h-20 w-full items-center justify-between px-10 mt-[15px]"
        {...props}
        >
        <Search placeholder="Buscar treino, dieta..." />
        <div className="flex items-center gap-4 text-zinc-600">
          <NotificationItem notificacoes={2} />
          <CalendarItem value={isoDate} onChange={handleDateChange} />
          <Profile/>
        </div>
      </Component>
      <Divider orientation="horizontal"/>
      </>
  );
}