import { useState, useEffect, useCallback } from "react";

import { User } from "@/types";

const RECENT_USERS_KEY = "recentUsers";
const MAX_RECENT_USERS = 5;

const useRecentUsers = () => {
  const [recentUsers, setRecentUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem(RECENT_USERS_KEY);
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const addUser = useCallback((user: User) => {
    setRecentUsers((prevUsers) => {
      const userExists = prevUsers.some((u) => u.name === user.name);

      const newUsers = userExists
        ? prevUsers.filter((u) => u.name !== user.name)
        : [...prevUsers];

      newUsers.unshift(user);

      if (newUsers.length > MAX_RECENT_USERS) {
        newUsers.pop();
      }

      return newUsers;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
  }, [recentUsers]);

  return { recentUsers, addUser };
};

export default useRecentUsers;
