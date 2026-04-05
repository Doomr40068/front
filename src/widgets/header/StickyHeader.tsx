import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';

interface StickyHeaderProps {
    show: boolean;
}

export function StickyHeader({ show }: StickyHeaderProps) {
    return (
        <div
            className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
        >
            <header className="bg-[#0B0D20] rounded-b-[15px] text-white flex items-center justify-between !p-5">
                <h1 className="text-xl font-bold">LOGO</h1>

                <ul className="flex space-x-4 text-sm">
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Проекты
                    </li>
                    <li className=" text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Услуги
                    </li>
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        О компании
                    </li>
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Карьера
                    </li>
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Блог
                    </li>
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Новости
                    </li>
                    <li className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent">
                        Контакты
                    </li>
                </ul>

                <ul className="flex space-x-3 text-2xl Icons">
                    <a href="https://web.telegram.org/a/" aria-label="Telegram">
                        <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </a>
                    <a href="https://vk.com" aria-label="VK">
                        <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </a>
                </ul>
            </header>
        </div>
    );
}
