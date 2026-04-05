export function News() {
    return (
        <div className="bg-[#EDEEFF] !p-[30px] rounded-4xl flex flex-col items-center">
            <h1 className="text-center text-[40px] font-bold !mb-12 ">Новости</h1>
            <div className="grid w-full grid-cols-3">
                <div className="bg-white !p-5 h-[300px] rounded-4xl flex flex-col justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <div className="rounded-4xl bg-gray-200 w-full h-[200px] flex items-center justify-center text-gray-400">
                            📷 Изображение новости
                        </div>
                        <h3 className="font-bold text-3xl ">title!!!</h3>
                        <h3 className="font-['Wix_Madefor_Text'] text-[18px]">description</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h3>📅</h3>
                        <h3 className="text-[#6F7998] text-[14px] font-['Wix_Madefor_Text']">
                            01.01.2001
                        </h3>
                    </div>
                </div>
            </div>
            <button className="!mt-[48px] text-[14px] rounded-[25px] font-['Wix_Madefor_Text'] !py-2 !px-4.5 text-white !bg-blue-700">
                Загрузить ещё
            </button>
        </div>
    );
}
