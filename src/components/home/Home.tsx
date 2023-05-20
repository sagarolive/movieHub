import React from "react";

import TrendingMovies from "./TrendingMovies";
import TrendingTvSeries from "./TrendingTvSeries";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <section className="space-y-11">
      <HeroSection />
      <TrendingMovies />
      <TrendingTvSeries />
    </section>
  );
};

export default Home;
