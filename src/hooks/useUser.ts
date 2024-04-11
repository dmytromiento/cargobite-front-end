import useUsers from "@/hooks/useUsers";

const useUser = (name: string) => {
  const users = useUsers();

  return users.find((user) => user.name === decodeURI(name));
};

export default useUser;
