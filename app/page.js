import { BookOpenText, ChartColumnBig, CircleDollarSign, Presentation, Quote, SquarePen, Star, TvMinimalPlay, UserCheck2, UserRound, Users, Volume2 } from "lucide-react";
import Image from "next/image";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import Marquee from "react-fast-marquee";
import Hero from "@/components/home.jsx/hero";
import Count from "@/components/home.jsx/count";
import CoursesByCategories from "@/components/home.jsx/coursesByCategories";
import PopularCoursesForYou from "@/components/home.jsx/popularCoursesForYou";
import Testimonials from "@/components/home.jsx/testimonials";
import Newsletter from "@/components/home.jsx/newsletter";
import Pricing from "@/components/home.jsx/pricing";

export default function Home() {



  return (
    <div>
      {
        /**
        *  ! HomePage
        */
      }
      <Hero />
      <Count />
      <CoursesByCategories />
      <PopularCoursesForYou />
      <Pricing />
      <Testimonials />
      <Newsletter />


    </div>
  );
}
