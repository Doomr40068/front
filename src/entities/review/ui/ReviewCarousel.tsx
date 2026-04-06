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
import { Review } from '../model/types';

interface ReviewCarouselProps {
    review: Review[];
}

export function OrdersCarousel({ review = [] }: ReviewCarouselProps) {
    if (!review.length) {
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
                {review.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="bg-[#EDEEFF] !h-[352px] !mx-5 ">
                                <CardContent className="flex flex-col aspect-square items-center justify-center !p-6">
                                    <div className=" w-full flex justify-between h-[20%] ">
                                        <h3 className="w-[50%]">{item.project.title}</h3>
                                        <button
                                            aria-label="Переход на проект"
                                            className="h-10 bg-black rounded-full w-10"
                                        >
                                            📃
                                        </button>
                                    </div>
                                    <div className="bg-white !p-4 h-[60%] w-full ">
                                        <h3 className="text-[16px] font-['Wix_Madefor_Text'] font-semibold">
                                            {item.content}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                className="rounded-full max-w-8 max-h-8 object-cover "
                                                src={item.image?.original_url}
                                                alt="Ava"
                                                width={40}
                                                height={40}
                                            />
                                            <div className="leading-1">
                                                <h3 className="font-semibold text-[16px] text-[#2D41F9]">
                                                    {item.fio}
                                                </h3>
                                                <h3 className="font-['Wix_Madefor_Text'] text-[16px] ">
                                                    {item.position}
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
