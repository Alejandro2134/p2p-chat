import ChatMessage from "../atoms/ChatMessage";

type Message = {
  isFromLocalUser: boolean;
  message: string;
};

type Props = {
  messages: Message[];
};

const ChatList = ({ messages }: Props) => {
  return (
    <div className="h-[80%] overflow-y-auto">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message.message}
          isFromLocalUser={message.isFromLocalUser}
        />
      ))}
    </div>
  );
};

export default ChatList;
