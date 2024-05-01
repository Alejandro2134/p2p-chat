import ChatMessage from "../atoms/ChatMessage";

const ChatList = () => {
  return (
    <div className="h-[80%] overflow-y-auto">
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
      <ChatMessage isFromLocalUser={true} message="Hello!" />
      <ChatMessage isFromLocalUser={false} message="Hi!" />
      <ChatMessage isFromLocalUser={true} message="How are you?" />
      <ChatMessage isFromLocalUser={false} message="I'm good, thanks!" />
    </div>
  );
};

export default ChatList;
