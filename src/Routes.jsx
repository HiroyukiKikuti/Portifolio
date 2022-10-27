import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Projetos from "./pages/Projetos";

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="*" exact element={<Main />}></Route>
            <Route path="/projetos" exact element={<Projetos />}></Route>
         </Routes>
      </BrowserRouter>
   );
}
