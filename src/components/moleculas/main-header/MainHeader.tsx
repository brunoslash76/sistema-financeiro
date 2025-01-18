"use client";

import { HamburguerIcon } from "@/components/icons/HamburguerIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { useEffect, useRef, useState } from "react";
import { ContextualMenu } from "../ContextualMenu/ContextualMenu";

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex justify-center w-full bg-primary-400 h-[96px] lg:px-[60px] md:px-[60px] px-6">
      <nav className="w-full lg:max-w-[1200px] flex justify-between items-center">
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <HamburguerIcon />
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full left-0 mt-2 bg-white shadow-lg z-50"
            >
              <ContextualMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
            </div>
          )}
        </div>
        <div className="md:ml-auto flex items-center gap-8">
          <p className="hidden text-white md:block">Joana da Silva Oliveira</p>
          <UserIcon size={40} />
        </div>
      </nav>
    </header>
  );
}
