type GreetingProps = {
  name: string;
  timeOfDay: string;
};

const Greeting: React.FC<GreetingProps> = ({ name, timeOfDay }) => {
  return <h1>Good {timeOfDay}, {name}!</h1>;
};

export default Greeting;
