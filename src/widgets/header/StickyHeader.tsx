import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { Contacts } from '@/entities/contact/model/types';
import { FaWhatsapp } from 'react-icons/fa6';

interface StickyHeaderProps {
    show: boolean;
    contacts: Contacts[];
}

export function StickyHeader({ show, contacts }: StickyHeaderProps) {
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

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

                <ul className="flex space-x-4 text-sm gap-2.5 ">
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

                <ul className="flex text-2xl gap-2 Icons">
                    <a href={contactsMap.telegram} aria-label="Telegram">
                        <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </a>
                    <a href={contactsMap.whatsapp} aria-label="Whatsapp">
                        <FaWhatsapp className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </a>
                    <a href={contactsMap.vk} aria-label="VK">
                        <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </a>
                </ul>
            </header>
        </div>
    );
}
