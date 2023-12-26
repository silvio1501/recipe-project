import React from "react";
import Layout from "../components/Layout";
import HeroAbout from "../feature/aboutPage/HeroAbout";
import ReviewSection from "../feature/aboutPage/ReviewSection";
import { HeadFC } from "gatsby";

const about = () => {
  return (
    <Layout>
      <HeroAbout />
      <ReviewSection />
    </Layout>
  );
};

export default about;

export const Head: HeadFC = () => <title>About</title>;
