const ChatSendMessage = () => {
  return (
    <div className="flex items-center p-4 h-[10%] border-2 border-slate-600">
      <input
        type="text"
        placeholder="Type a message"
        className="w-full px-4 py-2 mr-4 bg-gray-200 rounded-lg"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Send
      </button>
    </div>
  );
};

export default ChatSendMessage;
