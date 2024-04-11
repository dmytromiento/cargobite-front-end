import UserCard from "@/components/UserCard";
import useUsers from "@/hooks/useUsers";

export default function Home() {
  const users = useUsers();

  return (
    <main className="flex flex-col">
      <h1 className="text-center text-3xl font-bold">Users List</h1>

      <section className="mx-auto flex w-full max-w-xl flex-col gap-2 p-2">
        {users.map((user) => (
          <UserCard
            key={user.name}
            name={user.name}
            image={user.image}
            favorite={user.favorite}
          />
        ))}
      </section>
    </main>
  );
}
