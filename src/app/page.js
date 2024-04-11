import RecipeCard from "./components/RecipeCard";
import TopSection from "./components/TopSection";
import { data } from "@/data";

export default function Home() {
  return (
    <main className="">
      <TopSection />
      <div>
        <h3 className="text-center font-bold text-3xl mt-5">Explore <span className="text-red-600 underline">Recipes</span></h3>
        <div className="ml-5 my-5 flex gap-11 flex-wrap justify-center">
          <RecipeCard img={data[4].img} title={data[4].name} isVeg={data[4].isVeg} time={data[4].time} id={data[4].id} />
          <RecipeCard img={data[1].img} title={data[1].name} isVeg={data[1].isVeg} time={data[1].time} id={data[1].id} />
          <RecipeCard img={data[2].img} title={data[2].name} isVeg={data[2].isVeg} time={data[2].time} id={data[2].id} />
          <RecipeCard img={data[3].img} title={data[3].name} isVeg={data[3].isVeg} time={data[3].time} id={data[3].id} />
        </div>
      </div>
    </main>
  );
}
