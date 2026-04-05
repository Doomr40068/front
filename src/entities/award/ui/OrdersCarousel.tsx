'use client';

import { Card, CardContent } from '@/shared/ui/card/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/carousel/carousel';
import Image from 'next/image';
import type { Award } from '../model/types';

interface OrdersCarouselProps {
    awards: Award[];
}

export function OrdersCarousel({ awards }: OrdersCarouselProps) {
    if (!awards.length) {
        return <div className="text-center !py-10">No elements</div>;
    }

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className="w-full"
        >
            <CarouselContent>
                {awards.map((award) => (
                    <CarouselItem key={award.id} className="basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="bg-[#EDEEFF] !h-[352px] !mx-5 ">
                                <CardContent className="flex flex-col aspect-square items-center justify-center !p-6">
                                    <div className=" w-full flex justify-between h-[20%] ">
                                        <h3 className="w-[50%]">{award.title}</h3>
                                        <button
                                            aria-label="Переход на проект"
                                            className="h-[40px] bg-black rounded-full w-[40px]"
                                        >
                                            📃
                                        </button>
                                    </div>
                                    <div className="bg-white !p-4 h-[60%] w-full ">
                                        <h3 className="text-[16px] font-['Wix_Madefor_Text'] font-semibold">
                                            {award.description}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                className="rounded-full max-w-10 max-h-10 object-cover "
                                                src={award.award_image.original_url}
                                                alt="Ava"
                                                width={40}
                                                height={40}
                                            />
                                            <div className="leading-1">
                                                <h3 className="font-semibold text-[16px] text-[#2D41F9]">
                                                    name
                                                </h3>
                                                <h3 className="font-['Wix_Madefor_Text'] text-[16px] ">
                                                    name
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="!bg-[#EDEEFF]" />
            <CarouselNext className="!bg-[#EDEEFF]" />
        </Carousel>
    );
}
