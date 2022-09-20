import React, { useEffect } from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";

import { CDBBadge, CDBContainer } from "cdbreact";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";

export default function Sobre() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <section className="sobre" id="sobre">
         <div className="sobre-left" data-aos="fade-up">
            <img
               className="sobre-foto"
               src="https://cdn.discordapp.com/attachments/884773302478983170/1021788078836289676/perfil3.jpg"
               alt="Uma foto linda e maravilhosa do dono do portifólio"
            />
         </div>
         <div className="sobre-right" data-aos="fade-up">
            <div className="sobre-titles">
               <h1>{t("all.meuNome")}</h1>
               <h2>{t("header.sobre.cargos")}</h2>
               <h3>{t("header.sobre.local")}</h3>
            </div>
            <div className="sobre-text">
               <p>{t("header.sobre.sobremim")}</p>
            </div>
         </div>
      </section>
   );
}
