import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import About from "@/components/Home/About";
import Bookings from "@/components/Home/Bookings";
import Categories from "@/components/Home/Categories";
import Destinations from "@/components/Home/Destinations";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import PopularTopics from "@/components/Home/PopularTopics";
import Testimonials from "@/components/Home/Testimonials";
import Tours from "@/components/Home/Tours";
import TourTypes from "@/components/Home/TourTypes";
import TravelInsight from "@/components/Home/TravelInsight";
import Why from "@/components/Home/Why";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Featured />
      <About />
      <Destinations />
      <TourTypes />
      <Why />
      <Tours />
      <Categories />
      <Bookings />
      <Testimonials />
      <TravelInsight />
      <PopularTopics />
      {/* <Footer />
      <ScrollToTop /> */}
    </>
  );
}
