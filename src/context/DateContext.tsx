import { createContext, useContext, useState, type ReactNode } from "react";

interface DateContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  formattedDateBR: string;       // "14/08/2025"
  isoDate: string;               // "2025-08-14"
  diaNumero: string;             // "14"
  mes:string;                    //  "08"
  diaSemanaAbreviado: string;    // "QUA", "DOM", etc.
  diaSemanaCompleto: string;     // "QUARTA-FEIRA, 14 DE AGOSTO"
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export function DateProvider({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formattedDateBR = selectedDate.toLocaleDateString("pt-BR");

  const ano = selectedDate.getFullYear();
  const mes = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const dia = String(selectedDate.getDate()).padStart(2, "0");
  const isoDate = `${ano}-${mes}-${dia}`;

  const diaNumero = String(selectedDate.getDate());

  const diaSemanaAbreviado = selectedDate
    .toLocaleDateString("pt-BR", { weekday: "short" })
    .replace(".", "")
    .toUpperCase();

  const diaSemanaCompleto = selectedDate
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    .toUpperCase();

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        formattedDateBR,
        isoDate,
        diaNumero,
        mes,
        diaSemanaAbreviado,
        diaSemanaCompleto,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

export function useDate() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDate deve ser utilizado dentro de um DateProvider");
  }
  return context;
}