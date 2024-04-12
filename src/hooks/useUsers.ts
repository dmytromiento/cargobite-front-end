import { useMemo } from "react";

import usersData from "@/constants/users.json";
import { User, UserType } from "@/types";

type Props = {
  userType?: UserType | null;
  minAge?: number | null;
  maxAge?: number | null;
};
const useUsers = (props?: Props): User[] => {
  const { userType, minAge, maxAge } = props ?? {};

  const users = usersData as User[];

  return useMemo(() => {
    return users.filter((user) => {
      if (userType && user.type !== userType) {
        return false;
      }

      if (minAge && user.age < minAge) {
        return false;
      }

      if (maxAge && user.age > maxAge) {
        return false;
      }

      return true;
    });
  }, [maxAge, minAge, userType, users]);
};

export default useUsers;
