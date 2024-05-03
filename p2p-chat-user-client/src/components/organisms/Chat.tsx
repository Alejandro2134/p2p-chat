import ChatHeader from "../molecules/ChatHeader";
import ChatSendMessage from "../molecules/ChatSendMessage";
import ChatList from "../molecules/ChatList";
import { useEffect, useState } from "react";
import { DataConnection, Peer } from "peerjs";

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
  peer: Peer | null;
};

const Chat = ({ userToChatWith, peer }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [thisUser, setThisUser] = useState<DataConnection>();
  const [otherUser, setOtherUser] = useState<DataConnection>();

  useEffect(() => {
    setMessages([]);

    return () => {
      thisUser?.close();
      otherUser?.close();
    };
  }, [userToChatWith]);

  (function listenForMessages() {
    if (peer) {
      peer.on("connection", (conn) => {
        setThisUser(conn);
        conn.on("data", (data) => {
          setMessages(messages.concat(data as Message));
        });
      });
    }
  })();

  const sendMessage = (message: Message) => {
    setMessages(messages.concat(message));
    if (peer && userToChatWith) {
      const conn = peer.connect(userToChatWith.id);
      setOtherUser(conn);
      conn.on("open", () => {
        conn.send({ message: message.message, isFromLocalUser: false });
      });

      conn.on("close", () => {
        console.log("connection closed");
      });

      conn.on("error", () => {
        console.log("error sending message");
      });
    }
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
