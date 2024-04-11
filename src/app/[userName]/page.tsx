import ErrorMessage from "@/components/ErrorMessage";
import UserDetails from "@/components/UserDetails";
import useUser from "@/hooks/useUser";

export default function UserSlug({ params }: { params: { userName: string } }) {
  const user = useUser(params.userName);

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
