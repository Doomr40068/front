"use client";

import { RiTelegramLine } from "react-icons/ri";
import { BiLogoVk } from "react-icons/bi";
import { useState, useEffect } from "react";

function MainHeader() {
  return (
    <header>
      <h1>LOGO</h1>
      <ul>
        <li>Проекты</li>
        <li>Услуги</li>
        <li>О компании</li>
        <li>Карьера</li>
        <li>Блог</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
      <ul className="Icons">
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient
              id="telegram-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#2D41F9" />
              <stop offset="50%" stopColor="#9E70FF" />
              <stop offset="100%" stopColor="#36CFFF" />
            </linearGradient>
          </defs>
        </svg>
        <a href="https://web.telegram.org/a/">
          <RiTelegramLine className="telegram-icon" />
        </a>
        <BiLogoVk className="telegram-icon" />
      </ul>
    </header>
  );
}

function StickyHeader({ show }: { show: boolean }) {
  return (
    <div
      className={`
  fixed top-0 left-0 right-0 z-50 
  transition-all duration-500 
  ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
`}
    >
      <header className="bg-[#0B0D20] rounded-b-[15px] text-white ">
        <h1>LOGO</h1>
        <ul>
          <li>Проекты</li>
          <li>Услуги</li>
          <li>О компании</li>
          <li>Карьера</li>
          <li>Блог</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
        <ul className="Icons">
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="telegram-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2D41F9" />
                <stop offset="50%" stopColor="#9E70FF" />
                <stop offset="100%" stopColor="#36CFFF" />
              </linearGradient>
            </defs>
          </svg>
          <a href="https://web.telegram.org/a/">
            <RiTelegramLine className="telegram-dark" />
          </a>
          <BiLogoVk className="telegram-dark" />
        </ul>
      </header>
    </div>
  );
}

export default function Header() {
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handlerScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setShowSticky(true);
      } else if (currentScrollY === 0) {
        setShowSticky(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, [lastScrollY]);

  return (
    <>
      <MainHeader />
      <StickyHeader show={showSticky} />
    </>
  );
}
