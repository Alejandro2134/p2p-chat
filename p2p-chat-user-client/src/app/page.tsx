import UserList from "@/components/organisms/UserList";
import Chat from "@/components/organisms/Chat";

export default function Home() {
  return (
    <main className="flex columns-2 h-screen w-screen">
      <UserList />
      <Chat />
    </main>
  );
}
