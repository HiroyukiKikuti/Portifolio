import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./index.css";

export default function Footer() {
   const title = "<FK />";

   return (
      <CDBFooter className="shadow">
         <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: "80%" }}
         >
            <CDBBox className="boxFooter" display="flex" alignItems="center">
               <a href="/" className="d-flex align-items-center p-0 text-light">
                  {title}
               </a>
            </CDBBox>
            <CDBBox className="boxFooter">
               <small className="ml-2">&copy; Desenvolvido com ❤ por Kikuti</small>
            </CDBBox>
            {/* <CDBBox className="boxIcons" display="flex">
               <a href="https://github.com/HiroyukiKikuti" target="_blank" className="p-2">
                  <CDBIcon fab icon="github"></CDBIcon>
               </a>
               <a href="https://github.com/HiroyukiKikuti" target="_blank" className="mx-3 p-2">
                  <CDBIcon fab icon="discord"></CDBIcon>
               </a>
            </CDBBox> */}
         </CDBBox>
      </CDBFooter>
   );
}
