import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';


export function BannerBlock() {
    return (
        <div className="bannerblock">
            <div>
                <h1 id="bannertext">Разрабатываем сложные ITпродукты: е-ком, веб-сервисы, ИИ</h1>
                <div id="bottom">
                    <div id="buttonsblock">
                        <button>Обсудить проект</button>
                        <div className="Icons">
                            <RiTelegramLine className="telegram-icon" />
                            <BiLogoVk className="telegram-icon" />
                        </div>
                    </div>
                    <div id="place">
                        <div>
                            <h1 id="raiting">23</h1>
                            <h3>место</h3>
                        </div>
                        <h4>Разработка решений на базе ИИ</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
