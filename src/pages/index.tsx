import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Home;
