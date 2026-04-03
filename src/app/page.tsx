"use client";

import { RiTelegramLine } from "react-icons/ri";
import { BiLogoVk } from "react-icons/bi";
import "./home.css";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

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
      <div className="bannerblock">
        <div>
          <h1 id="bannertext">
            Разрабатываем сложные ITпродукты: е-ком, веб-сервисы, ИИ
          </h1>
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
      <div>
        <h1 className="main_award">Награды студии</h1>
        <div className="awards">
          {posts &&
            posts.map((el) => (
              <div key={el?.id} className="award_card">
                <img
                  className="img_award"
                  src={el?.award_icon.original_url}
                  alt="award"
                />
                <div>
                  <h1 className="title_award">{el?.title}</h1>
                  <h3 className="des_award">{el?.description}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center !mb-30">
        <h1 className="main_award"> Наши проекты </h1>
        <Tabs defaultValue="webservices" className="w-full">
          <TabsList className="flex flex-nowrap w-4/5 gap-3 bg-transparent p-0 overflow-x-auto overflow-y-hidden no-scrollbar">
            <TabsTrigger
              value="webservices"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Веб-сервисы
            </TabsTrigger>
            <TabsTrigger
              value="crm"
              className="
                      hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              CRM-системы
            </TabsTrigger>
            <TabsTrigger
              value="eshop"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Интернет-магазины
            </TabsTrigger>
            <TabsTrigger
              value="corporate"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Корпоративные сайты
            </TabsTrigger>
            <TabsTrigger
              value="marketplace"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Агрегаторы, маркетплейсы
            </TabsTrigger>
            <TabsTrigger
              value="logic"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Логичекие сервисы
            </TabsTrigger>
            <TabsTrigger
              value="else_project"
              className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    px-6 py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
            >
              Другие проекты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="webservices" className="mt-6">
            <div className="flex gap-10 h-400 items-center">
              <div className="flex flex-col gap-3">
                {posts &&
                  posts.map((el) => (
                    <div key={el?.id} className="flex flex-col gap-4">
                      <img
                        className="h-70 rounded-4xl"
                        src={el?.award_icon.original_url}
                        alt="award"
                      />
                      <div>
                        <h1 className="font-bold">{el?.title}</h1>
                        <h3 className="">{el?.description}</h3>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="h-4/5 items-center flex flex-col gap-3 justify-center overflow-y-auto no-scrollbar">
                {posts &&
                  posts.map((el) => (
                    <div key={el?.id} className="flex flex-col gap-4">
                      <img
                        className="h-70 rounded-4xl"
                        src={el?.award_icon.original_url}
                        alt="award"
                      />
                      <div>
                        <h1 className="font-bold">{el?.title}</h1>
                        <h3 className="">{el?.description}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crm" className="mt-6">
            <div>Контент CRM</div>
          </TabsContent>

          <TabsContent value="eshop" className="mt-6">
            <div>Контент магазинов</div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-6">
            <div>Контент корпоративных сайтов</div>
          </TabsContent>
          <TabsContent value="marketplace" className="mt-6">
            <div>OZON</div>
          </TabsContent>
          <TabsContent value="logic" className="mt-6">
            <div>Логичекие сервисы</div>
          </TabsContent>
          <TabsContent value="else_project" className="mt-6">
            <div>Другие наши проекты</div>
          </TabsContent>
        </Tabs>
        <button className="text-white !px-10 !py-5 !text-2xl">
          Загрузить ещё
        </button>
      </div>
      <div className="!py-10 !px-8 flex gap-10 rounded-4xl bg-gradient-to-bl from-[#08158A] via-[#1A2ABE] via-[#2D41F9] via-[#8793FC] to-[#F0F1FF]">
        <div className="w-[50%]">
          <h1 className="font-bold !mb-5 text-white text-6xl">Наша команда</h1>
          <h3 className="text-white text-[16px] font-light ">
            Благодаря многолетнему опыту мы гибко используем современные
            методологии разработки — Scrum, Agile, Lean, Kanban, применяя и
            адаптируя их под нужды проекта
          </h3>
          <button className="text-white !mt-5 !px-7 !py-3 !text-[15px]">
            Подробнее
          </button>
          <div className="grid grid-cols-2 grid-rows-2 !mt-[60px] gap-6">
            <div>
              <h1
                className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
              >
                40
              </h1>
              <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                штатных сотрудников:аналитики, дизайнеры, разработчики,
                тестировщики, девопсы
              </h3>
            </div>
            <div>
              <h1
                className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
              >
                15
              </h1>
              <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                лет — опыт работы топ-менеджеров компании в разработке
              </h3>
            </div>
            <div>
              <h1
                className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
              >
                5
              </h1>
              <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                лет на рынке разработки
              </h3>
            </div>
            <div>
              <h1
                className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
              >
                90
              </h1>
              <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                реализованных проектов
              </h3>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="!mt-[100px]">
        <h1 className="main_award">Нам доверяют</h1>
        
      </div>
      <div className="flex rounded-4xl gap-[20px] !pt-[45px] !px-[40px]  !mt-[120px] !mb-[100px] bg-[#6ECCFF] bg-gradient-to-r from-[#70D0FF] to-[#2D41F9] ">
        <img
          className="!w-[30%]"
          src="https://avatars.mds.yandex.net/i?id=47d1a0286b5c698e131ab46dee8fdbfe1f323178-5322230-images-thumbs&n=13"
          alt="Сдесь могла быть выша реклама"
        />
        <div className="text-white ">
          <h1 className="text-[30px] font-medium text-white">
            Обсудим ваш проект?
          </h1>
          <h4 className="text-[16px] !my-[20px] font-['Wix_Madefor_Text'] ">
            Сформируем четкий план реализации проекта <br />в кратчайшие сроки и
            в рамках вашего бюджета
          </h4>
          <div className="flex gap-1 ">
            <h4 className="!mr-2 font-['Wix_Madefor_Text'] text-[18px] ">
              Обсудить проект
            </h4>
            <RiTelegramLine className="telegram-icon text-[30px] !fill-white " />
            <BiLogoVk className="telegram-icon text-[30px] !fill-white" />
          </div>
        </div>
      </div>
      <div className="bg-[#EDEEFF] !p-[30px] rounded-4xl flex flex-col !items-center">
        <h1 className="main_award">Новости</h1>
        <div className="grid w-full grid-cols-3">
          <div className="bg-white !p-5 h-[300px] rounded-4xl flex flex-col justify-between">
            <div className="flex flex-col gap-[8px]">
              <img className="rounded-4xl" src="" alt="News img" />
              <h1 className="font-bold text-3xl ">title!!!</h1>
              <h3 className="font-['Wix_Madefor_Text'] text-[18px]">
                description
              </h3>
            </div>
            <div className="flex gap-4 items-center">
              <h3>📅</h3>
              <h3 className="text-[#6F7998] text-[14px] font-['Wix_Madefor_Text']">
                01.01.2001
              </h3>
            </div>
          </div>
        </div>
        <button className="!mt-[48px] !text-[14px] !px-8 text-white !bg-blue-700">
          Загрузить ещё
        </button>
      </div>
      <div className="!mt-[120px] !pt-[20px] !px-[80px] h-[600px] items-center gap-[20px] text-white flex flex-col rounded-4xl bg-gradient-to-t from-[#060B82] to-[#0B0D20]">
        <h1 className=" text-4xl font-bold ">
          Мы всегда ищем новые
          <br />
          таланты в нашу команду
        </h1>
        <div className="flex">
          <div className="!w-[40%] items-end flex flex-col !mr-[30px] ">
            <img src="" alt="backend img" />
          </div>
          <div className="!w-[50%] flex flex-col gap-[5px]">
            <h3 className="text-[12px] font-light font-['Wix_Madefor_Text']  ">
              Работая в нашей команде, каждый день ты будешь делать и узнавать
              что-то новое и интересное. Крутые знакомства, долгосрочные проекты
              и необычные задачи – то, что ждет тебя в Киберии
            </h3>
            <div className="flex text-[12px] font-['Wix_Madefor_Text'] font-light gap-2 items-center ">
              <button className="!bg-blue-600 !px-[35px]">Присоединяйся</button>
              <h3 className="underline decoration-blue-600">
                Вакансии на hh.ru
              </h3>
            </div>
            <img className="!mt-[40px]" src="" alt="frontend img" />
          </div>
        </div>
      </div>
      
    </main>
  );
}
