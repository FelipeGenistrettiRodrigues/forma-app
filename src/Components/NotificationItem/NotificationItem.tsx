import Icon from "../Icon/Icon";
import NotificacoesIcon from "../../assets/icons/notificacao.svg?react";
import TemNotificacaoIcon from "../../assets/icons/temnotificacao.svg?react";
import type { ComponentProps, ElementType } from "react";

interface NotificationItemProps extends ComponentProps<"div">{
    as?:ElementType;
    notificacoes:number;
    className?:string;
}

export function NotificationItem({
    as: Component = "div", notificacoes, className, ...props
}:NotificationItemProps){

    return (

        <Component className="cursor-pointer" onClick={() => alert("bom dia") } {...props} >
            { notificacoes > 0 ? <Icon svg={TemNotificacaoIcon} /> : <Icon svg={NotificacoesIcon} />}
        </Component>

    )
}