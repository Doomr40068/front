import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs/tabs';
import { Project } from '@/entities/projects/model/types';
import Image from 'next/image';

interface ProjectProps {
    projects: Project[];
}

export function OurProject({ projects }: ProjectProps) {
    return (
        <div className="flex flex-col items-center mb-30">
            <h1 className="text-center text-[40px] font-bold !mb-12 "> Наши проекты </h1>
            <Tabs defaultValue="webservices" className="w-full">
                <TabsList className="font-['Wix_Madefor_Text'] text-[15px] gap-3 bg-transparent flex flex-nowrap w-full overflow-x-auto">
                    <TabsTrigger
                        value="webservices"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
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
                    !px-6 !py-2.5
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
                    !px-6 !py-2.5
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
                    !px-6 !py-2.5
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
                    !px-6 !py-2.5
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
                    !px-6 !py-2.5
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
                    !px-6!py-2.5
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
                    <div className="flex gap-10 items-center">
                        <div className="grid grid-cols-2 gap-5">
                            {projects &&
                                projects.map((el) => (
                                    <div key={el?.id} className="flex flex-col gap-4">
                                        <Image
                                            className="rounded-4xl"
                                            src={el.image.original_url}
                                            alt={el.title || 'Project'}
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
