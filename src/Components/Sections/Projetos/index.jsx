import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./index.css";
import { useTranslation } from "react-i18next";

export default function Projetos() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };

   return (
      <>
         <section className="projetos" id="projetos"></section>
      </>
   );
}
