import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.css";
import { useTranslation } from "react-i18next";
import { FaEnvelope } from "react-icons/fa";

export default function Contato() {
   const { t } = useTranslation();

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <section className="contato" id="contato">
         <div className="contato-left">
            <h1>Gostou do meu trabalho?</h1>
            <p>Para mais informações entre em contato</p>
            <a href="mailto:kikutifabiano@outlook.com">
               <button>
                  <FaEnvelope />
                  <span>Envie uma mensagem</span>
               </button>
            </a>
         </div>
         {/* <div className="contato-right">
            <img src="https://cdn.discordapp.com/attachments/884773302478983170/1021796837948133376/email.png"></img>
         </div> */}
      </section>
   );
}
