import Image from "next/image";

type User = {
  username: string;
  id: string;
};

type Props = {
  userName: string;
  id: string;
  selectUser: (user: User) => void;
};

const UserCard = ({ userName, selectUser, id }: Props) => {
  return (
    <div
      className="flex items-center container px-4 hover:opacity-50"
      onClick={() => selectUser({ username: userName, id })}
    >
      <Image src="/chat.svg" alt="Chat Image" width={100} height={24} />
      <p className="text-lg">Chat with {userName}</p>
    </div>
  );
};

export default UserCard;
