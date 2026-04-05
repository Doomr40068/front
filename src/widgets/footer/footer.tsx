import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { Wix_Madefor_Text } from 'next/font/google';

const wixMadefor = Wix_Madefor_Text({
    weight: '400',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

function Footer() {
    return (
        <footer className={wixMadefor.className}>
            <div id="fott-logo">
                <h1 className="logo">LOGO</h1>
                <h6 className="under_footer">
                    © 2026 ООО «Киберия», номер в реестре аккредитованных IT-компаний: 53278
                </h6>
            </div>
            <div className="ul_footer">
                <ul>
                    <li>Проекты</li>
                    <li>Услуги</li>
                    <li>О компании</li>
                    <li>Карьера</li>
                    <li>Блог</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>
                <h6 className="under_footer">Реквизиты компании</h6>
            </div>
            <div className="Call">
                <div>
                    <h4 className="feeback">+7 960 959 18 66</h4>
                    <h4 className="feeback">hello@cyberia.studio</h4>
                    <h6 className="under_footer">г.Барнул, ул.Ярных, 35, оф.10</h6>
                    <div className="Icons">
                        <a href="https://web.telegram.org/a/">
                            <RiTelegramLine className="telegram-icon" />
                        </a>
                        <BiLogoVk className="telegram-icon" />
                    </div>
                </div>
                <h6 className="under_footer">Политика конфиденциальности</h6>
            </div>
        </footer>
    );
}

export default Footer;
