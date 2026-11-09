import Icon from "../Icon/Icon";
import ProfileIcon from "../../assets/icons/perfil-header.svg?react"
import { Button } from "../Button/Button";


export function Profile() {

    return (
        <div className="cursor-pointer">
            <Icon svg={ProfileIcon}/>
        </div>
    )
}