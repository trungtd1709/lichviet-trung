import "@/styles/globals.css";
import "@/components/Title/title.css";
import "@/components/Calendar/calendar.css";
import "@/layout/Card/card.css";
import Header from "@/components/Header";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Footers from "@/components/Footer";
import "../../public/fontawesome/css/all.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footers />
    </div>
  );
}
