import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs/tabs';
import type { Award } from '@/entities/award/model/types';
import Image from 'next/image';

interface AwardsCompanyProps {
    awards: Award[];
}

export function OurProject({ awards }: AwardsCompanyProps) {
    return (
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
                            {awards &&
                                awards.map((el) => (
                                    <div key={el?.id} className="flex flex-col gap-4">
                                        <Image
                                            className="h-70 rounded-4xl"
                                            src={el.award_icon.original_url}
                                            alt={el.title || 'award'}
                                            width={300}
                                            height={280}
                                        />
                                        <div>
                                            <h1 className="font-bold">{el?.title}</h1>
                                            <h3 className="">{el?.description}</h3>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="h-4/5 items-center flex flex-col gap-3 justify-center overflow-y-auto no-scrollbar">
                            {awards &&
                                awards.map((el) => (
                                    <div key={el?.id} className="flex flex-col gap-4">
                                        <Image
                                            className="h-70 rounded-4xl"
                                            src={el.award_icon.original_url}
                                            alt={el.title || 'award'}
                                            width={300}
                                            height={280}
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
            <button className="text-white !px-10 !py-5 !text-2xl">Загрузить ещё</button>
        </div>
    );
}
