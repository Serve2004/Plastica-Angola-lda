import { Outlet } from "react-router-dom";

import { Header } from "../components/home/header";
import { Footer } from "../components/home/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export function RootLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
