import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

import MainIndex from "./main-index";
import MainAbout from "./main-about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainIndex />} />
          <Route path="about" element={<MainAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
