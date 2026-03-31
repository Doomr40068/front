 import { RiTelegramLine } from "react-icons/ri";
 import { BiLogoVk } from "react-icons/bi";



function Header() {
return <header>
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
    <ul className="Icons" >
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="telegram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2D41F9" />
              <stop offset="50%" stopColor="#9E70FF" />
              <stop offset="100%" stopColor="#36CFFF" />
            </linearGradient>
          </defs>
        </svg>
        <a href="https://web.telegram.org/a/"><RiTelegramLine className="telegram-icon" /></a>
        <BiLogoVk className="telegram-icon" />
    </ul>
</header>
}

export default Header