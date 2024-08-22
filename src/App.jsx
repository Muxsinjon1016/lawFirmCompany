import { React } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { Home } from "./pages/home";
import About from "./pages/about/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" />
          <Route path="/faq" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
