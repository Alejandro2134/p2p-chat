import UserCard from "../molecules/UserCard";

const Chats: { id: string; userName: string }[] = [
  {
    id: "1",
    userName: "John Doe",
  },
  {
    id: "2",
    userName: "Daniel Alejandro",
  },
  {
    id: "3",
    userName: "Andres Cardenas",
  },
  {
    id: "4",
    userName: "Morita Molina",
  },
  {
    id: "5",
    userName: "Diego Maradona",
  },
  {
    id: "6",
    userName: "James Hetfield",
  },
  {
    id: "7",
    userName: "Oscar Perez",
  },
];

const UserList = () => {
  return (
    <div className="flex flex-col overflow-y-auto w-auto">
      {Chats.length !== 0 ? (
        Chats.map((chat) => <UserCard key={chat.id} userName={chat.userName} />)
      ) : (
        <p className="text-lg">No chats available</p>
      )}
    </div>
  );
};

export default UserList;
