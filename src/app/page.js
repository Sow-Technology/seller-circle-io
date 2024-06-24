"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Data from "@/components/sections/Data";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Opportunities from "@/components/sections/Opportunities";
import Talk from "@/components/sections/Talk";
import Why from "@/components/sections/Why";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:px-20 px-8 ">
        <Hero />
        <Features />
        <Why />
        <Opportunities />
      </div>
      <Data />
      {/* <Talk /> */}
      <Footer />
    </>
  );
}
