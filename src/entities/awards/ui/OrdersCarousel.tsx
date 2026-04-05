'use client';

import { Card, CardContent } from '@/shared/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/carousel';
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
                            <Card className="bg-[#EDEEFF] !mx-5 ">
                                <CardContent className="flex flex-col aspect-square items-center justify-center !p-6">
                                    <div className=" w-full flex justify-between h-[20%] ">
                                        <h1 className="w-[50%]">{award.title}</h1>
                                        <button className="h-[40px] w-[40px]">📃</button>
                                    </div>
                                    <div className="bg-white !p-4 h-[60%] w-full ">
                                        <h1 className="text-3xl font-semibold">
                                            {award.description}
                                        </h1>
                                        <div className="flex items-center gap-2">
                                            <Image src="" alt="Ava" />
                                            <div>
                                                name <br />
                                                Roole
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
