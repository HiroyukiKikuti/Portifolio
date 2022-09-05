import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";
import { FaEye, FaGit, FaGithub } from "react-icons/fa";

export default function Projetos() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <>
         <section className="projetos" id="projetos"></section>
      </>
   );
}
