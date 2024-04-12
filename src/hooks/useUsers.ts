import { useMemo } from "react";

import usersData from "@/constants/users.json";
import { User, UserSortBy, UserType } from "@/types";

type Props = {
  userType?: UserType | null;
  minAge?: number | null;
  maxAge?: number | null;
  sortBy?: UserSortBy;
};
const useUsers = (props?: Props): User[] => {
  const { userType, minAge, maxAge, sortBy } = props ?? {};

  const users = usersData as User[];

  return useMemo(() => {
    const resultUsers = users.filter((user) => {
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

    if (sortBy) {
      resultUsers.sort((a, b) => {
        switch (sortBy) {
          case UserSortBy.NameAsc:
            return a.name.localeCompare(b.name);
          case UserSortBy.NameDesc:
            return b.name.localeCompare(a.name);
          case UserSortBy.AgeAsc:
            return a.age - b.age;
          case UserSortBy.CompanyAsc:
            return a.company.localeCompare(b.company);
          default:
            return 0;
        }
      });
    }

    return resultUsers;
  }, [maxAge, minAge, userType, users, sortBy]);
};

export default useUsers;
