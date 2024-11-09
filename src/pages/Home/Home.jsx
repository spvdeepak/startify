import Hero from "./components/Hero";
import Tracks from "./components/Tracks";
import About from "./components/whoWeAre";
import History from "./components/History";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Loader from "@/components/Loader";
import Faqs from "./components/Faqs";

const Home = () => {
  const { isLoading } = useContext(AppContext);
  if (isLoading) return <Loader />;
  return (
    <div className="mt-[73px]">
      <Hero />
      <Tracks />
      {/* <About /> */}
      <History />
      <Faqs />
    </div>
  );
};
export default Home;
