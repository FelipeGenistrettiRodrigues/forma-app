import type { ComponentProps, FC } from "react";
import { Text } from "../Text/Text";
import ConfiguracoesIcon from "../../assets/icons/configuracoes.svg?react";
import MeusTreinosIcon from "../../assets/icons/meus-treinos.svg?react";
import MinhaDietaIcon from "../../assets/icons/minha-dieta.svg?react";
import ProgressoIcon from "../../assets/icons/progresso.svg?react";
import visaoGeralIcon from "../../assets/icons/visao-geral.svg?react";
import { Button } from "../Button/Button";
import Icon from "../Icon/Icon";
import { Link, useLocation } from "react-router-dom";

interface AsideItem {
  label: string;
  route: string;
  icon: FC<ComponentProps<"svg">>;
}

export function AsideList() {
  const location = useLocation();

  const asideItems: AsideItem[] = [
    { label: "Visão geral", route: "/", icon: visaoGeralIcon },
    { label: "Configurações", route: "/configuracoes", icon: ConfiguracoesIcon },
    { label: "Meus treinos", route: "/meus-treinos", icon: MeusTreinosIcon },
    { label: "Minha dieta", route: "/minha-dieta", icon: MinhaDietaIcon },
    { label: "Progresso", route: "/progresso", icon: ProgressoIcon },
  ];

  return (
    <>
        <div className="space-y-3">
        <Text className="uppercase" variant="heading-section">
            menu principal
        </Text>
        {asideItems.map((item) => {
            const isActive = location.pathname === item.route;

            return (
            <Link key={item.route} to={item.route} className="block w-full">
                <Button
                variant={isActive ? "primary" : "secondary"}
                className="w-full gap-2 flex justify-between"
                >
                <Icon svg={item.icon} />
                <Text variant="paragraph-medium">{item.label}</Text>
                </Button>
            </Link>
            );
        })}
        </div>
        <div className="pt-[25px]">
            <Text className="uppercase font-semibold">sua conta</Text>
            <div className="pt-[10px]">
                <Button variant="secondary" className="gap-2">
                    <Icon svg={ConfiguracoesIcon} />
                    Configurações
                </Button>
            </div>
        </div>
    </>
  );
}