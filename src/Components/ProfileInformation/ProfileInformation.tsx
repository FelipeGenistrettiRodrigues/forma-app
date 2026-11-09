import { Text } from "../Text/Text";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import Icon from "../Icon/Icon";
import { Button } from "../Button/Button";


interface ProfileInformationProps {
  userName: string;
  planoUser: string;
}

export function ProfileInformation({
  userName,
  planoUser,
  ...props
}: ProfileInformationProps) {
  function getInitials(name: string): string {
    const parts = name.trim().split(/\s+/);

    if (parts.length === 0 || !parts[0]) return "";

    if (parts.length > 1) {
      const firstName = parts[0];
      const lastName = parts.at(-1)!;
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    }

    const singleName = parts[0];
    return singleName.slice(0, 2).toUpperCase();
  }

  return (
    <>
        <div className="flex justify-between gap-2">
            <div
                className="rounded-full items-center justify-center bg-[#FAF9F5] w-[50px] h-[50px] p-3 flex gap-1 font-semibold text-neutral-800 mt-[15px]"
                {...props}
                >
                <Text as="span">{getInitials(userName)}</Text>
            </div>
            <div className="flex mt-[15px] flex-col justify-center">
                <Text className="font-semibold text-sm whitespace-nowrap">{userName}</Text>
                <Text className="text-xs">{planoUser}</Text>
            </div>
            <div className="flex justify-end items-center ml-3">
                <Button variant="secondary">
                    <Icon svg={LogoutIcon} />
                </Button>
            </div>
        </div>
        
    </>
  );
}