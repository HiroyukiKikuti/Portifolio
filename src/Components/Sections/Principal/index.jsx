import React, { useEffect } from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";

export default function Principal() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 4000 });
   }, []);

   return (
      <section className="principal" id="inicio" data-aos="zoom-in">
         <div className="principal-left">
            <h1>{t("header.principal.h1Hello")}</h1>
            <span>{t("all.meuNome")}</span>
            <h1>{t("header.principal.h1FullStack")}</h1>
            <div className="principal-buttons">
               <a href="https://github.com/HiroyukiKikuti" target="_blank">
                  <div className="principal-buttons-btn">
                     <FaGithub />
                     Github
                  </div>
               </a>
               <a href="/">
                  <div className="principal-buttons-btn">
                     <FaDiscord />
                     Discord
                  </div>
               </a>
            </div>
         </div>
         {/* <div className="principal-right">
            <img
               className="imagePrincipal"
               src="https://cdn.discordapp.com/attachments/884773302478983170/1014143481112965160/programmer.png"
               alt="imagemprogramadorIlustrativa"
            />
         </div> */}
      </section>
   );
}
