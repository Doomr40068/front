"use client";

import type { Award } from '@/entities/awards/model/types';
import { BannerBlock } from './BannerBlcok';
import { OurProject } from './OurProject';
import { OurCommand } from './OurCommand';
import { OrdersCarousel } from '@/entities/awards/ui/OrdersCarousel';
import { ContactsBanner } from './ContactsBanner';
import { News } from './News';
import { Vacantion } from './Vacantion';
import { AwardsCompany } from './AwardsCompany';

interface HomeClientProps {
    awards: Award[];
}

export function HomeClient({ awards }: HomeClientProps) {
    return (
        <main>
            <BannerBlock />
            <AwardsCompany awards={awards} />
            <OurProject awards={awards} />
            <OurCommand />
            <div className="mt-[100px]">
                <h1 className="text-center text-4xl font-bold mb-12">Нам доверяют</h1>
                <OrdersCarousel awards={awards} />
            </div>
            <ContactsBanner />
            <News />
            <Vacantion />
        </main>
    );
}