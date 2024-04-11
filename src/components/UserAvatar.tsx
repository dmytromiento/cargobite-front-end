import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { MdFavorite } from "react-icons/md";

type Size = "sm" | "lg";

type Props = {
  image: string;
  size?: Size;
  favorite?: boolean;
};

const UserAvatar: FC<Props> = ({ image, size = "sm", favorite = false }) => {
  return (
    <div className="relative">
      <Image
        src={require(`@/assets/users/${image}`)}
        alt={`${image} avatar`}
        className={classNames("flex-2 relative rounded", {
          "w-16 h-16": size === "sm",
          "w-28 h-28": size === "lg",
          "blur-sm": favorite,
        })}
      />
      {favorite && (
        <div className="absolute inset-0 flex items-center justify-center">
          <MdFavorite color="white" />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
