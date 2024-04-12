"use client";
import { useMemo, useState } from "react";

import Select from "@/components/ui/Select";
import UserCard from "@/components/UserCard";
import UserFilters from "@/components/UserFilters";
import useUsers from "@/hooks/useUsers";
import { UserSortBy, UserType } from "@/types";

const SORT_OPTIONS = [
  { value: UserSortBy.NameAsc, label: "Name (Asc)" },
  { value: UserSortBy.NameDesc, label: "Name (Desc)" },
  { value: UserSortBy.AgeAsc, label: "Age" },
  { value: UserSortBy.CompanyAsc, label: "Company" },
];

export default function Home() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [minAge, setMinAge] = useState<number | null>(null);
  const [maxAge, setMaxAge] = useState<number | null>(null);

  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0].value);
  const sortByOption = useMemo(
    () => SORT_OPTIONS.find((option) => option.value === sortBy),
    [sortBy]
  );

  const users = useUsers({ userType, minAge, maxAge, sortBy });

  return (
    <main className="flex flex-col">
      <h1 className="text-center text-3xl font-bold">Users List</h1>

      <section className="mx-auto flex w-full max-w-xl flex-col gap-2 p-2">
        <div className="flex flex-col items-center gap-1.5 py-2">
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

          <div className="mx-auto w-full">
            <Select
              label="Sory by"
              options={SORT_OPTIONS}
              selectedOption={sortByOption}
              onChange={(option) => {
                setSortBy(option.value);
              }}
            />
          </div>
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
