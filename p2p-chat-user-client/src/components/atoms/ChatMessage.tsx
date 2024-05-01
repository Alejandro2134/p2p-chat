type Props = {
  isFromLocalUser: boolean;
  message: string;
};

const ChatMessage = ({ isFromLocalUser, message }: Props) => {
  return (
    <div className={`${isFromLocalUser ? "bg-indigo-500" : "bg-slate-400"}`}>
      <p>
        {message} {isFromLocalUser ? "(You)" : ""}
      </p>
    </div>
  );
};

export default ChatMessage;
