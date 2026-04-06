import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { Wix_Madefor_Text } from 'next/font/google';
import { Contacts } from '@/entities/contact/model/types';
import { FaWhatsapp } from 'react-icons/fa6';

const wixMadefor = Wix_Madefor_Text({
    weight: '400',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

interface ContactsProps {
    contacts: Contacts[];
}

function Footer({ contacts }: ContactsProps) {
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

    return (
        <footer className={wixMadefor.className}>
            <div className="flex flex-col justify-between">
                <h1 className="px-5 py-2.5">LOGO</h1>
                <h6 className="w-[70%] text-[16px] mb-2.5 ">
                    © 2026 ООО «Киберия», номер в реестре аккредитованных IT-компаний: 53278
                </h6>
            </div>
            <div className="flex flex-col justify-between w-1/4">
                <ul>
                    <li>Проекты</li>
                    <li>Услуги</li>
                    <li>О компании</li>
                    <li>Карьера</li>
                    <li>Блог</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>
                <h6 className="w-[70%] text-[16px] mb-2.5">Реквизиты компании</h6>
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h4 className="text-2xl font-bold">{contactsMap.phone}</h4>
                    <h4 className="text-2xl font-bold">{contactsMap.email}</h4>
                    <h6 className="w-[70%] text-[16px]">{contactsMap.address}</h6>
                    <div className="flex flex-row text-3xl">
                        <a href={contactsMap.telegram}>
                            <RiTelegramLine className="fill-black duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                        <a href={contactsMap.whatsapp}>
                            <FaWhatsapp className="fill-black duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                        <a href={contactsMap.vk}>
                            <BiLogoVk className="fill-black duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                    </div>
                </div>
                <h6 className="w-[70%] text-[16px] mb-2.5">Политика конфиденциальности</h6>
            </div>
        </footer>
    );
}

export default Footer;
