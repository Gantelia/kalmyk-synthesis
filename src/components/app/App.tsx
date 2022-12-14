import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layout/layout";
import MainIndex from "../main-index/main-index";
import About from "../about/about";
import { AppRoute } from "../../const";
import NotFound from "../not-found/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainIndex />} />
          <Route path={AppRoute.About} element={<About />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
