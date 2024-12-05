interface ButtonProps {
    label: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
      <button className="
        px-[32px] 
        py-[12px]
        text-[#fff] 
        bg-primary-400
        rounded-[8px] 
        font-semibold 
        leading-none
        hover:bg-primary-600">
        {label}
      </button>
    );
  };
  
  export default Button;