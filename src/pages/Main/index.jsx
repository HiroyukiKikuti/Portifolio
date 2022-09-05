import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import Navbar from "../../Components/Nav";
import Experiencia from "../../Components/Sections/Experiencia";
import Principal from "../../Components/Sections/Principal";
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
         <Footer />
      </div>
   );
}
