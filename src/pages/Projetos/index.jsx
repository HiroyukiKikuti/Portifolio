import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { batch, Fade, Move, StickyIn, ZoomIn } from "react-scroll-motion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";
import { GitHub, Twitter } from "@mui/icons-material";
import { Badge } from "react-bootstrap";

export default function Projetos() {
   const { t } = useTranslation();

   const ZoomInScrollOut = batch(StickyIn(), Fade(), ZoomIn());
   const FadeUp = batch(Fade(), Move());

   return (
      <div className="projetos">
         {/* <ScrollContainer>
            <ScrollPage>
               <Animator animation={ZoomInScrollOut}>
                  <div className="page1">
                     <h1 style={{ fontSize: "70px" }}>PROJETOS</h1>
                     <span>
                        Websites/Projetos foram feitos por mim ou que tiveram participação minha :D
                     </span>
                     <br></br>
                     <a href="https://github.com/HiroyukiKikuti" rel="noopener noreferrer" target="_blank">
                        <GitHub
                           style={{ color: "white", cursor: "pointer", textAlign: "center" }}
                        />
                     </a>
                  </div>
               </Animator>
            </ScrollPage>
         </ScrollContainer> */}
      </div>
   );
}
