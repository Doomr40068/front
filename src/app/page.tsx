
import { awardAPI } from "@/entities/awards/api/awards-api";
import { HomeView } from "@/views/home/HomeView";


export default async function HomePage() {
    const awards = await awardAPI.getAwards();
    return <HomeView awards={awards} />;
}