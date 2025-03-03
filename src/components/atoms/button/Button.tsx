import { buttonTypeMap, variantMap } from './Button.constants';
import { ButtonProps } from "./button.types";

export function Button({ children, variant, buttonType, ...props }: ButtonProps) {
  return (
    <button
      { ...props }
      className={`
        rounded-lg
        px-4
        py-2
        ${variantMap[variant]}
        ${buttonTypeMap[buttonType]}
        ${props?.className}
      `}
    
    >
      { children }
    </button>
  );
};
