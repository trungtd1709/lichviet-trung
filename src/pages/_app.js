import "@/styles/globals.css";
import "@/components/Title/title.css";
import "@/components/Calendar/calendar.css";
import "@/layout/Card/card.css";
import "@/components/Posts/posts.css";
import "@/components/Header/layout/headerAvatar.css";
import "@/pages/chinh-sach-bao-mat/csbm.css";

import Header from "@/components/Header";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Footers from "@/components/Footer";
import "../../public/fontawesome/css/all.css";
import Head from "next/head";
import { AppProvider } from "@/context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="App">
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footers />
      </div>
    </AppProvider>
  );
}
