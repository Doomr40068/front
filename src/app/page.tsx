"use client"

import { RiTelegramLine } from "react-icons/ri";
import { BiLogoVk } from "react-icons/bi";
import "./home.css";
import { useEffect, useState } from 'react';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/awards");
        const result = await res.json();
        setPosts(result.data.awards);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }
    fetchData();
  }, []);

  console.log("Текущий posts:", posts);

  return (
   <main>
    <div className='bannerblock' >
      <div>
        <h1 id="bannertext">Разрабатываем сложные ITпродукты: е-ком, веб-сервисы, ИИ</h1>
        <div id="bottom" >
        <div id="buttonsblock">
          <button>Обсудить проект</button>
          <div className='Icons' >
            <RiTelegramLine className='telegram-icon' />
            <BiLogoVk className='telegram-icon' />
          </div>
        </div>
          <div id="place" >
              <div>
                <h1 id="raiting">23</h1>
                <h3>место</h3>
              </div>
              <h4>Разработка решений на базе ИИ</h4>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 className="main_award" >Награды студии</h1>
        <div className="awards" >
          {posts && posts.map(el => (
            <div key={el?.id} className="award_card">
              <img className="img_award" src={el?.award_icon.original_url} alt="award" />
              <div>
                <h1 className="title_award">{el?.title}</h1>
                <h3 className="des_award">{el?.description}</h3>
              </div>
            </div>
          ))}
        </div>
    </div>
    <div>
      <h1 className="main_award"> Наши проекты </h1>
    </div>
    </main>
  );
}
