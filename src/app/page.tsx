"use client";
import { useState } from "react";

import UserCard from "@/components/UserCard";
import UserFilters from "@/components/UserFilters";
import useUsers from "@/hooks/useUsers";
import { UserType } from "@/types";

export default function Home() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [minAge, setMinAge] = useState<number | null>(null);
  const [maxAge, setMaxAge] = useState<number | null>(null);

  const users = useUsers({ userType: userType, minAge, maxAge });

  return (
    <main className="flex flex-col">
      <h1 className="text-center text-3xl font-bold">Users List</h1>

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-2 p-2">
        <div className="py-2">
          <UserFilters
            userType={userType}
            minAge={minAge}
            maxAge={maxAge}
            onChangeFilter={({ type, minAge, maxAge }) => {
              setUserType(type);
              setMinAge(minAge);
              setMaxAge(maxAge);
            }}
          />
        </div>

        <div className="mx-auto flex w-full max-w-xl flex-col gap-1">
          {users.map((user) => (
            <UserCard
              key={user.name}
              name={user.name}
              image={user.image}
              favorite={user.favorite}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
