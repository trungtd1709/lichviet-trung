import "@/components/Calendar/calendar.css";
import "@/components/Header/layout/headerAvatar.css";
import "@/components/Posts/posts.css";
import "@/components/ThanSoHocResult/ThanSoHocResult.css";
import "@/components/Title/title.css";
import "@/layout/Card/card.css";
import "@/pages/chinh-sach-bao-mat/csbm.css";
import "@/pages/mo-tai-khoan-tiet-kiem-sieu-lai-suat/kbank.css";
import "@/styles/globals.css";

import Header from "@/components/Header";
// import "bootstrap/dist/js/bootstrap.js";
import Footers from "@/components/Footer";
import { AppProvider } from "@/context/authContext";
import store from "@/redux/AppStore";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "../../public/fontawesome/css/all.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppProvider>
        <div className="App">
          <Header {...pageProps} />
          <Component {...pageProps} />
          <Footers />
        </div>
      </AppProvider>
    </Provider>
  );
}
