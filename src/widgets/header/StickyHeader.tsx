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
            <header className="bg-[#0B0D20] rounded-b-[15px] text-white flex items-center justify-between p-3">
                <h1 className="text-xl font-bold">LOGO</h1>

                <ul className="flex space-x-4 text-sm">
                    <li className="hover:text-gray-300 cursor-pointer">Проекты</li>
                    <li className="hover:text-gray-300 cursor-pointer">Услуги</li>
                    <li className="hover:text-gray-300 cursor-pointer">О компании</li>
                    <li className="hover:text-gray-300 cursor-pointer">Карьера</li>
                    <li className="hover:text-gray-300 cursor-pointer">Блог</li>
                    <li className="hover:text-gray-300 cursor-pointer">Новости</li>
                    <li className="hover:text-gray-300 cursor-pointer">Контакты</li>
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
