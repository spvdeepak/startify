import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Hero from "@/pages/Home/components/Hero";
import Tracks from "@/pages/Home/components/Tracks";
import About from "@/pages/Home/components/whoWeAre";
import History from "@/pages/Home/components/History";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Loader from "@/components/Loader";
import Faqs from "@/pages/Home/components/Faqs";

const Home = () => {
  const { width, height } = useWindowSize();
  const { isLoading } = useContext(AppContext);
  if (isLoading) return <Loader />;
  return (
    <div className="mt-[73px] overflow-x-hidden">
      <Confetti width={width} height={height} recycle={true} />
      <Hero />
      <Tracks />
      <About />
      <History />
      <Faqs />
    </div>
  );
};
export default Home;
