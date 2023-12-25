import "@/components/AppBreadcrumb/Breadcrumb.css";
import "@/components/Calendar/calendar.css";
import Header from "@/components/Header";
import "@/components/Header/layout/headerAvatar.css";
import "@/components/Posts/posts.css";
import "@/components/ThanSoHocResult/ThanSoHocResult.css";
import "@/components/Title/title.css";
import "@/layout/Card/card.css";
import "@/pages/chinh-sach-bao-mat/csbm.css";
import "@/pages/mo-tai-khoan-tiet-kiem-sieu-lai-suat/kbank.css";
import "@/styles/globals.css";
// import "bootstrap/dist/js/bootstrap.js";
import Footers from "@/components/Footer";
import { AppProvider } from "@/context/authContext";
import store from "@/redux/AppStore";
import { setAppLoading } from "@/redux/slices/appSlice";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import { Provider } from "react-redux";
import "../../public/fontawesome/css/all.css";

// Router.events.on("routeChangeStart", () => {
//   store.dispatch(setAppLoading(true));
// });
// Router.events.on("routeChangeComplete", () => {
//   store.dispatch(setAppLoading(false));
// });
// Router.events.on("routeChangeError", () => {
//   store.dispatch(setAppLoading(false));
// });

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
