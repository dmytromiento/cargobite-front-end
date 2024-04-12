"use client";
import { useEffect } from "react";

import ErrorMessage from "@/components/ui/ErrorMessage";
import UserDetails from "@/components/UserDetails";
import useRecentUsers from "@/hooks/useRecentUsers";
import useUser from "@/hooks/useUser";

export default function UserSlug({ params }: { params: { userName: string } }) {
  const user = useUser(params.userName);
  const { addUser } = useRecentUsers();

  useEffect(() => {
    if (user) {
      addUser(user);
    }
  }, [user, addUser]);

  return (
    <main className="mx-auto max-w-3xl p-4">
      {user ? (
        <UserDetails {...user} />
      ) : (
        <ErrorMessage message="User not found" />
      )}
    </main>
  );
}
