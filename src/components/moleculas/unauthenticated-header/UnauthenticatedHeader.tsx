"use client";

import { toggleLoginModal, toggleSignupModal } from "@/lib/features/modalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { MobileHeader } from "./components/mobile-header/MobileHeader";
import { TabletDesktopHeader } from "./components/table-desktop-header/TabletDesktopHeader";

export const experimental_ppr = true;

export function UnauthenticatedHeader() {
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    function toggleOverflow(overflowType: 'hidden' | 'auto') {
      const body = document.querySelector('body')!

      if (overflowType === 'auto') {
        body.classList.remove('overflow-hidden')
        body.classList.add('overflow-auto')
      } else {
        body.classList.remove('overflow-auto')
        body.classList.add('overflow-hidden')
      }
    }

    if (openMenu) {
      toggleOverflow('hidden')
    } else {
      toggleOverflow('auto')
    }
  }, [openMenu])

  function handleMenuClick() {
    console.log('click')
    setOpenMenu(state => !state)
  }

  function handleOpenAccountButton() {
    dispatch(toggleSignupModal())
    setOpenMenu(false)
  }

  function handleOpenLoginButton() {
    dispatch(toggleLoginModal())
    setOpenMenu(false)
  }

  return (
    <>
      {/* Tablet Desktop */}
      <TabletDesktopHeader 
        handleOpenAccountButton={handleOpenAccountButton}
        handleOpenLoginButton={handleOpenLoginButton}
      />    

      {/* Mobile */}
      <MobileHeader 
        handleMenuClick={handleMenuClick}
        handleOpenAccountButton={handleOpenAccountButton}
        handleOpenLoginButton={handleOpenLoginButton}
        openMenu={openMenu}
      />
    </>
  );
}
