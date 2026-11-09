import type { ComponentProps } from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

interface ModalCreateEntityProps extends ComponentProps<"div"> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ModalCreateEntity({
  isOpen,
  onClose,
  title,
  children,
  ...props
}: ModalCreateEntityProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm p-4"
      {...props}
    >

      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
        <Card className="bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
            <Button variant="secondary"
              type="button"
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-700 font-bold"
            >
              ✕
            </Button>
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
}