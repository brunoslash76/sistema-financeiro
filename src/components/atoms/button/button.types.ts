import { ButtonHTMLAttributes } from "react"

export type Variant = 
  'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'alert'


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant: Variant
}
