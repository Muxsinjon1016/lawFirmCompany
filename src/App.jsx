import { React } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" />
          <Route path="/services" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
