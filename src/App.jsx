import React, { Suspense, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home"
import Events from "@/pages/Events/Events"
import AboutUs from "@/pages/About/About"
import Contact from "@/pages/Contact/Contact"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AppContext } from "./context/AppContext";
import Loader from "./components/Loader";
import Team from '@/pages/Team/Team'
import NotFound from "@/pages/NotFound/NotFound";
// Remove
// import CHome from '@/pages/home'

const App = () => {
  const { isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div className="overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" exact element={<NotFound />} />

          {/* Remove */}
          {/* <Route path="/chome" exact element={<CHome />} /> */}
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
