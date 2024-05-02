import { useState } from "react";

type Message = {
  isFromLocalUser: boolean;
  message: string;
};

type Props = {
  sendMessage: (message: Message) => void;
  userName: string;
};

const ChatSendMessage = ({ sendMessage, userName }: Props) => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const currencyTransformer = (message: string) => {
    if (message.startsWith("/")) {
      const currencyCommand = message.substring(1);
      fetch("http://localhost:3002/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: currencyCommand,
          user: userName,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          sendMessage({ isFromLocalUser: true, message: data.content });
        })
        .catch((error) => {
          sendMessage({ isFromLocalUser: true, message: "Send command again" });
        });
    }
  };

  return (
    <div className="flex items-center p-4 h-[10%] border-2 border-slate-600">
      <input
        type="text"
        placeholder="Type a message"
        className="w-full px-4 py-2 mr-4 bg-gray-200 rounded-lg"
        onChange={handleChange}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          sendMessage({ isFromLocalUser: true, message });
          currencyTransformer(message);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatSendMessage;
