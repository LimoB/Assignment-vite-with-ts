type MessageChildProps = {
  message: string;
};

const MessageChild: React.FC<MessageChildProps> = ({ message }) => {
  return <p>{message}</p>;
};

export default MessageChild;
