import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import NewsLetter from "../components/NewsLetter";
import Policy from "../components/Policy";

function Home() {
  return (
    <div className="home">
      <Hero />
      <LatestCollections />
      <BestSellers />
      <Policy />
      <NewsLetter />
    </div>
  );
}

export default Home;
