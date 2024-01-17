import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import NewGirl from "../components/NewGirl";
import NewStart from "../components/NewStart";
import NewText from "../components/NewText";
import NewPictures from "../components/NewPictures";
import NewBottom from "../components/NewBottom";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section new_girl">
        <NewGirl />
      </section>
      <section className="section new_start">
        <NewStart />
      </section>
      <section className="section new_text">
        <NewText />
      </section>
      <section className="section new_pictures">
        <NewPictures />
      </section>
      <section className="section new_bottom">
        <NewBottom />
      </section>
    </>
  );
};

export default Home;
