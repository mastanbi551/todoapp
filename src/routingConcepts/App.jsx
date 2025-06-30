import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../routingConcepts/Layout";
import Home from "../routingConcepts/pages/Home";
import About from "../routingConcepts/pages/About";
import style from "../routingConcepts/css/style.css?inline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
