import { FC } from "react";

import LabeledText from "@/components/LabeledText";
import UserAvatar from "@/components/UserAvatar";
import { User } from "@/types";

const UserDetails: FC<User> = ({ name, image, age, company, about }) => {
  return (
    <section className="divide-y divide-solid">
      <div className="py-2">
        <UserAvatar image={image} size="lg" />
      </div>

      <div className="flex flex-col gap-1.5 py-2">
        <LabeledText label="Name:" text={name} />
        <LabeledText label="Age:" text={age.toString()} />
        <LabeledText label="Company:" text={company} />
        <LabeledText label="About:" text={about} />
      </div>
    </section>
  );
};

export default UserDetails;
