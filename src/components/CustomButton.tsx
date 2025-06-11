type CustomButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CustomButton;
