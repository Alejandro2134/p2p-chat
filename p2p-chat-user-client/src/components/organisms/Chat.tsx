import ChatHeader from "../molecules/ChatHeader";
import ChatSendMessage from "../molecules/ChatSendMessage";
import ChatList from "../molecules/ChatList";
import { useState } from "react";

type User = {
  username: string;
  id: string;
};

type Message = {
  isFromLocalUser: boolean;
  message: string;
};

type Props = {
  userToChatWith: null | User;
};

const Chat = ({ userToChatWith }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: Message) => {
    setMessages(messages.concat(message));
  };

  return (
    <div className="w-full">
      {userToChatWith ? (
        <>
          <ChatHeader chatName={userToChatWith.username} />
          <ChatList messages={messages} />
          <ChatSendMessage
            sendMessage={sendMessage}
            userName={userToChatWith.username}
          />
        </>
      ) : (
        <p className="text-center text-2xl">Select a user to start chatting</p>
      )}
    </div>
  );
};

export default Chat;
