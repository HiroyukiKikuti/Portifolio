import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import Navbar from "../../Components/Nav";
import Contato from "../../Components/Sections/Contato";
import Experiencia from "../../Components/Sections/Experiencia";
import Principal from "../../Components/Sections/Principal";
import Projetos from "../../Components/Sections/Projetos";
import Sobre from "../../Components/Sections/Sobre";

import "../../index.css";

export default function Main() {
   const { t } = useTranslation();

   return (
      <div className="App">
         {/* <LanguageSwitcher /> */}
         <Navbar />
         <Principal />
         <Sobre />
         <Experiencia />
         {/* <Projetos /> */}
         <Contato />
         <Footer />
      </div>
   );
}
