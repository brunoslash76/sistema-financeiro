import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function InnerCard({ children, ...props }: Props) {
  return (
    <div
      className={`
        bg-primary-400
        rounded-lg
        flex
        flex-col
        justify-center
        items-center
        py-4
        px-8
        w-full
        ${props.className}
      `}
    >
      { children }
    </div>
  )
}
