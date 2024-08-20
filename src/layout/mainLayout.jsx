import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { SpeedDials } from "../components/speedDials";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <section className="fixed right-1 bottom-16 sm:right-10 sm:bottom-10">
        <SpeedDials />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
