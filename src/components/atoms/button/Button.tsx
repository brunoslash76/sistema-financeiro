import { variantMap } from './Button.constants';
import { ButtonProps } from "./button.types";

export function Button({ label, variant, ...props }: ButtonProps) {
  return (
    <button className={`
      px-[32px]
      py-[12px]
      text-[#fff] 
      bg-primary-400
      rounded-[8px] 
      font-semibold 
      leading-none
      hover:bg-primary-600
      ${variantMap[variant]}
    `}
    { ...props }
    >
      { label }
    </button>
  );
};
