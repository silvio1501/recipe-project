import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../feature/homePage/HeroSection";
import CategorySection from "../feature/homePage/CategorySection";
import LastRecipes from "../feature/homePage/LastRecipes";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <LastRecipes />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
