import type { Award } from '@/entities/award/model/types';
import { BannerBlock } from '../../widgets/banner/BannerBlock';
import { OurProject } from '../../widgets/our-project/OurProject';
import { OurCommand } from '../../widgets/our-command/OurCommand';
import { OrdersCarousel } from '@/entities/award/ui/OrdersCarousel';
import { ContactsBanner } from '../../widgets/contacts-banner/ContactsBanner';
import { News } from '../../widgets/news/News';
import { Vacantion } from '../../widgets/vacancy/Vacancy';
import { AwardsCompany } from '../../widgets/awards-company/AwardsCompany';

interface HomeClientProps {
    awards: Award[];
}

export function HomeView({ awards }: HomeClientProps) {
    return (
        <main>
            <BannerBlock />
            <AwardsCompany awards={awards} />
            <OurProject awards={awards} />
            <OurCommand />
            <div className="!mt-[100px]">
                <h2 className="text-center text-4xl font-bold !mb-12">Нам доверяют</h2>
                <OrdersCarousel awards={awards} />
            </div>
            <ContactsBanner />
            <News />
            <Vacantion />
        </main>
    );
}
