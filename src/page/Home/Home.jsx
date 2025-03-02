import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/Fooddisplay/FoodDisplay";
import AppDoenload from "../../components/AppDownload/AppDoenload";

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDoenload />
    </div>
  );
};

export default Home;
