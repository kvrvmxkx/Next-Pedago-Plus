import '@smastrom/react-rating/style.css'

import Hero from "@/components/home/hero";
import Count from "@/components/home/count";
import CoursesByCategories from "@/components/home/coursesByCategories";
import PopularCoursesForYou from "@/components/home/popularCoursesForYou";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Pricing from "@/components/home/pricing";

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
