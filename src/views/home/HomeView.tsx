import type { Award } from '@/entities/award/model/types';
import { BannerBlock } from '../../widgets/banner/BannerBlock';
import { OurProject } from '../../widgets/our-project/OurProject';
import { OurCommand } from '../../widgets/our-command/OurCommand';
import { OrdersCarousel } from '@/entities/review/ui/ReviewCarousel';
import { ContactsBanner } from '../../widgets/contacts-banner/ContactsBanner';
import { News } from '../../widgets/news/News';
import { Vacantion } from '../../widgets/vacancy/Vacancy';
import { Project } from '@/entities/projects/model/types';
import { AwardsCompany } from '../../widgets/awards-company/AwardsCompany';
import { Review } from '@/entities/review/model/types';
import { Posts } from '@/entities/post/model/types';

interface HomeClientProps {
    awards: Award[];
    review: Review[];
    news: Posts[];
}

export function HomeView({ awards, review, news }: HomeClientProps) {
    return (
        <main>
            <BannerBlock />
            <AwardsCompany awards={awards} />
            <OurProject />
            <OurCommand />
            <div className="!mt-[100px]">
                <h2 className="text-center text-4xl font-bold !mb-12">Нам доверяют</h2>
                <OrdersCarousel review={review} />
            </div>
            <ContactsBanner />
            <News news={news} />
            <Vacantion />
        </main>
    );
}
