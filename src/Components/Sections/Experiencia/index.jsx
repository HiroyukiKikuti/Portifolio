import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";
import { FaDatabase, FaHtml5, FaJava, FaJs } from "react-icons/fa";

export default function Experiencia() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <section className="experiencia" id="experiencia" data-aos="fade-right">
         <div className="experiencia-text">
            <h1>{t("header.experiencia.titulo")}</h1>
            <p>{t("header.experiencia.p1")}</p>
            <p>{t("header.experiencia.p2")}</p>
            <p>{t("header.experiencia.p3")}</p>
         </div>
         <div className="experiencia-details">
            <div className="chart">
               <span>
                  React Js <FaJs />
               </span>
               <footer className="footerChart">
                  <div className="barreactjs"></div>
               </footer>
            </div>
            <div className="chart">
               <span>
                  Front-End <FaHtml5 />
               </span>
               <footer className="footerChart">
                  <div className="barfront"></div>
               </footer>
            </div>
            <div className="chart">
               <span>
                  Back-End <FaDatabase />
               </span>
               <footer className="footerChart">
                  <div className="barback"></div>
               </footer>
            </div>
            <div className="chart">
               <span>
                  Java <FaJava />
               </span>
               <footer className="footerChart">
                  <div className="barjava"></div>
               </footer>
            </div>
            <div className="chart">
               <span>
                  React Native <FaJs />
               </span>
               <footer className="footerChart">
                  <div className="barrnative"></div>
               </footer>
            </div>
         </div>
      </section>
   );
}
