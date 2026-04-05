import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';

export function MainHeader() {
    return (
        <header className="flex items-center justify-between !p-5 !mb-5 font-semibold  ">
            <h1 className="text-2xl font-bold">LOGO</h1>

            <ul className="flex space-x-4 gap-1 ">
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Проекты
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Услуги
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    О компании
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Карьера
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Блог
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Новости
                </li>
                <li className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer">
                    Контакты
                </li>
            </ul>

            <ul className="flex space-x-3 text-3xl Icons">
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <linearGradient id="telegram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2D41F9" />
                            <stop offset="50%" stopColor="#9E70FF" />
                            <stop offset="100%" stopColor="#36CFFF" />
                        </linearGradient>
                    </defs>
                </svg>
                <a href="https://web.telegram.org/a/" aria-label="Telegram">
                    <RiTelegramLine className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                </a>
                <a href="https://vk.com" aria-label="VK">
                    <BiLogoVk className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                </a>
            </ul>
        </header>
    );
}
