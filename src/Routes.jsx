import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="*" exact element={<Main />}></Route>
         </Routes>
      </BrowserRouter>
   );
}
