import usersData from "@/constants/users.json";
import { User } from "@/types";

const useUsers = (): User[] => {
  return usersData as User[];
};

export default useUsers;
