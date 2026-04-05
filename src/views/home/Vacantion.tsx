import { FunctionSquare } from 'lucide-react';

export function Vacantion() {
    return (
        <div className="!mt-[120px] !pt-[20px] !px-[80px] h-[600px] items-center gap-[20px] text-white flex flex-col rounded-4xl bg-gradient-to-t from-[#060B82] to-[#0B0D20]">
            <h1 className=" text-4xl font-bold ">
                Мы всегда ищем новые
                <br />
                таланты в нашу команду
            </h1>
            <div className="flex">
                <div className="!w-[40%] items-end flex flex-col !mr-[30px] ">
                    {/* Изображение будет добавлено позже */}
                    <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                        Backend img
                    </div>
                </div>
                <div className="!w-[50%] flex flex-col gap-[5px]">
                    <h3 className="text-[12px] font-light font-['Wix_Madefor_Text']  ">
                        Работая в нашей команде, каждый день ты будешь делать и узнавать что-то
                        новое и интересное. Крутые знакомства, долгосрочные проекты и необычные
                        задачи – то, что ждет тебя в Киберии
                    </h3>
                    <div className="flex text-[12px] font-['Wix_Madefor_Text'] font-light gap-2 items-center ">
                        <button className="!bg-blue-600 !px-[35px]">Присоединяйся</button>
                        <h3 className="underline decoration-blue-600">Вакансии на hh.ru</h3>
                    </div>
                    <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 !mt-[40px]">
                        Frontend img
                    </div>
                </div>
            </div>
        </div>
    );
}
