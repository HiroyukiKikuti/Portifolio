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
               src="https://cdn.discordapp.com/attachments/984489112478310512/1214303424481599529/WhatsApp_Image_2024-03-04_at_19.52.59-removebg-preview.png?ex=65f89f31&is=65e62a31&hm=ba4517897afbaff560fe9a1c07806bdfa5a0910b0bf34d7f4fc561f01ef6a761&"
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
