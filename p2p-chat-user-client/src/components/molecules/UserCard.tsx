import Image from "next/image";

type Props = {
  userName: string;
};

const UserCard = ({ userName }: Props) => {
  return (
    <div className="flex items-center container px-4 hover:opacity-50">
      <Image src="/chat.svg" alt="Chat Image" width={100} height={24} />
      <p className="text-lg">Chat with {userName}</p>
    </div>
  );
};

export default UserCard;
