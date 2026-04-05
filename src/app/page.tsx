
import { awardAPI } from "@/entities/awards/api/awards-api";
import HomeClient from "@/views/home/HomeClient";


export default async function HomePage() {
    const awards = await awardAPI.getAwards();
    return <HomeClient awards={awards} />;
}