import MessageChild from "./MessageChild";

const MessageParent: React.FC = () => {
  const message = "Hello from the parent!";
  return <MessageChild message={message} />;
};

export default MessageParent;
