import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { MdFavorite } from "react-icons/md";

import Button from "@/components/Button";
import { User } from "@/types";

type Props = Pick<User, "name" | "image" | "favorite">;

const UserCard: FC<Props> = ({ name, image, favorite }) => {
  return (
    <div className="relative flex w-full items-center gap-2 border bg-white p-2">
      <div className="relative">
        <Image
          src={require(`@/assets/users/${image}`)}
          alt={`${name} avatar`}
          className={classNames("flex-2 relative aspect-auto w-16 rounded", {
            "blur-sm": favorite,
          })}
        />
        {favorite && (
          <div className="absolute inset-0 flex items-center justify-center">
            <MdFavorite color="white" />
          </div>
        )}
      </div>
      <span className="line-clamp-1 flex-1 text-center">{name}</span>
      <Button variant="outline" className="flex-2" href={`/${name}`}>
        View
      </Button>
    </div>
  );
};

export default UserCard;
