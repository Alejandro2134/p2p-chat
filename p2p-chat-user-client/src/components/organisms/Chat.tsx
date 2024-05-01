import ChatHeader from "../molecules/ChatHeader";
import ChatSendMessage from "../molecules/ChatSendMessage";
import ChatList from "../molecules/ChatList";

const Chat = () => {
  return (
    <div className="w-full">
      <ChatHeader chatName="Alejandro" />
      <ChatList />
      <ChatSendMessage />
    </div>
  );
};

export default Chat;
