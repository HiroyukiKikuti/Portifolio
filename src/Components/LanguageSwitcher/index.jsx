import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./index.css";
import br from "./assets/brazil2.svg";
import usa from "./assets/usa.svg";

const languageOptions = [
   {
      name: "Português",
      aliase: "pt-BR",
      value: "ptBR",
   },
   {
      name: "English",
      aliase: "En",
      value: "en",
   },
];

export default function LanguageSwitcher() {
   const { t } = useTranslation();

   const onClick = (l) => {
      i18n.changeLanguage(l);
   };

   return (
      <div className="LanguageSwitcher">
         <div
            className="btnSwitcher"
            onClick={() => onClick(languageOptions[0].value)}
            style={{
               backgroundColor:
                  i18n.language === languageOptions[0].value
                     ? "rgb(0, 0, 0, 0.5)"
                     : "rgb(0, 0, 0, 0)",
            }}
         >
            <img src={br} style={{ height: 20 }}></img>
            <span
               style={{
                  fontWeight: i18n.language === languageOptions[0].value ? "bold" : "normal",
               }}
            >
               PT-BR
            </span>
         </div>
         <div
            className="btnSwitcher"
            onClick={() => onClick(languageOptions[1].value)}
            style={{
               backgroundColor:
                  i18n.language === languageOptions[1].value
                     ? "rgb(0, 0, 0, 0.5)"
                     : "rgb(0, 0, 0, 0)",
            }}
         >
            <img src={usa} style={{ height: 22 }}></img>
            <span
               style={{
                  fontWeight: i18n.language === languageOptions[1].value ? "bold" : "normal",
               }}
            >
               EN
            </span>
         </div>
      </div>
   );
}

//  <span>{t("selecioneSuaLinguagem")}</span>

// {languageOptions.map((languageOption) => (
//    <button key={languageOption.value} onClick={() => onClick(languageOption.value)}>
//       <span
//          style={{ fontWeight: i18n.language === languageOption.value ? "bold" : "normal" }}
//       >
//          {languageOption.name} ({languageOption.aliase})
//       </span>
//    </button>
// ))}
