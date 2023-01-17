import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";
import { FaEnvelope } from "react-icons/fa";

export default function Projetos() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <section className="Projetos" id="projetos">
         <h1 style={{ textAlign: "center" }}>
            PROJECTS<br></br> IN WORKING
         </h1>
      </section>
   );
}
