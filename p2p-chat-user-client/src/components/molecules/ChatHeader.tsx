type Props = {
  chatName: string;
};

const ChatHeader = ({ chatName }: Props) => {
  return (
    <div className="flex h-[10%] items-center justify-center border-2 border-slate-600">
      <p className="text-lg">Chatting with: {chatName}</p>
    </div>
  );
};

export default ChatHeader;
