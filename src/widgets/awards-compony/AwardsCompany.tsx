import { Award } from '@/entities/awards/model/types';  
import Image from 'next/image';

interface AwardsCompanyProps {
    awards: Award[];  
}

export function AwardsCompany({awards}: AwardsCompanyProps) {

    return (
        <div>
            <h1 className="main_award">Награды студии</h1>
            <div className="awards">
                {awards  &&
                    awards .map((el) => (
                        <div key={el?.id} className="award_card">
                            <Image
                                className="img_award"
                                src={el?.award_icon.original_url}
                                alt="award"
                            />
                            <div>
                                <h1 className="title_award">{el?.title}</h1>
                                <h3 className="des_award">{el?.description}</h3>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
