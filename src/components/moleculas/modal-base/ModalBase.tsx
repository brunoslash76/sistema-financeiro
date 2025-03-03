import { SmallCloseIcon } from "@/components/icons/SmallCloseIcon";
import { FocusTrap } from "focus-trap-react";
import { ReactNode, useEffect } from "react";

interface Props {
  handleSubmit: () => void
  toggleModal: () => void
  children: ReactNode
  showModal: boolean
}

export function ModalBase({ handleSubmit, toggleModal, showModal, children }: Props) {
  useEffect(() => {
    if (window && showModal ) {
      const body = document.querySelector('body')
      body?.classList.add('overflow-hidden')
    } 
  
    return () => {
      const body = document.querySelector('body')
      body?.classList.remove('overflow-hidden')
    }
  }, [showModal])
  
  return (
    <section className="w-full h-[100vh] bg-[#000000bb] fixed top-0 left-0 ">
      <FocusTrap>
        <form
          className="mx-auto w-full max-w-[792px] bg-primary-200 h-full relative overflow-auto"
          onSubmit={handleSubmit}
        >
          <button className="absolute right-4 top-4" type="button" onClick={toggleModal}>
            <SmallCloseIcon />
          </button>
          {children}
        </form>
      </FocusTrap>
    </section>
  )
}
