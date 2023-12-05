import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import LoginPC from "./layout/LoginPC";
// import { AuthContext } from "../../Context/AuthContext";
// import IconCrown from "../../assets/Icons/IconCrown";
// import LoginPC from "./layout/LoginPc";

const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;

const MenuTabBar = [
  {
    name: "TRANG CHỦ",
    link: "/",
    children: false,
  },
  {
    name: "TỬ VI",
    link: "/tu-vi",
    children: [
      { name: "Tử vi hàng ngày", link: "/tu-vi/tu-vi-hang-ngay" },
      { name: "Tử vi hàng tuần", link: "/tu-vi/tu-vi-hang-tuan" },
      { name: "Kiến thức tử vi", link: "/tu-vi/kien-thuc-tu-vi" },
      { name: "Con số may mắn", link: "/tu-vi/con-so-may-man-hom-nay" },
    ],
  },
  {
    name: "PHONG THỦY",
    link: "/phong-thuy",
    children: [
      {
        name: "Kiến thức phong thủy",
        link: "/phong-thuy/kien-thuc-phong-thuy",
      },
    ],
  },
  {
    name: "CUNG HOÀNG ĐẠO",
    link: "/cung-hoang-dao",
    children: [
      {
        name: "12 cung hoàng đạo hằng ngày",
        link: "/cung-hoang-dao/12-cung-hoang-dao-hang-ngay",
      },
      { name: "Mật ngữ chòm sao", link: "/cung-hoang-dao/mat-ngu-chom-sao" },
    ],
  },
  {
    name: "THẦN SỐ HỌC",
    link: "/than-so-hoc",
    children: [
      {
        name: "Kiến thức thần số học",
        link: "/than-so-hoc/kien-thuc-than-so-hoc",
      },
    ],
  },
  {
    name: "TIỆN ÍCH HAY",
    link: "/tien-ich-hay",
    children: [
      { name: "Văn khấn", link: "/tien-ich-hay/van-khan" },
      { name: "Giải mã giấc mơ", link: "/tien-ich-hay/giai-ma-giac-mo" },
      { name: "Sức khỏe tinh thần", link: "/tien-ich-hay/suc-khoe-tinh-than" },
      { name: "Tin tức khác", link: "/tien-ich-hay/tin-tuc-khac" },
    ],
  },
  {
    name: "ỨNG DỤNG LỊCH VIỆT",
    link: "/lich-van-nien",
    children: false,
  },
  {
    name: "LIÊN HỆ",
    link: "/lien-he",
    children: false,
  },
];

const Header = () => {
  const route_link = useRef();
  // const { userData, userLogout } = useContext(AuthContext);
  useEffect(() => {
    const url = window.location.pathname.replace("/", "").split("/");
    if (route_link.current) {
      for (let item of route_link.current.children) {
        let link = item.children[0];
        let href = link?.getAttribute("data-href");
        if (href === url[0]) {
          link.classList.add("active");
        }
      }
    }
  }, []);

  const [classMenuMB, setClassMenuMB] = useState(false);
  const openMenuMB = () => {
    setClassMenuMB(true);
  };
  const closeMenuMb = (e) => {
    localStorage.removeItem("PAGE");
    setClassMenuMB(false);
  };
  const openMenuChildren = (e) => {
    e.target.querySelector(".dropdown-menu")?.classList?.add("open");
    document.querySelector("#button-back")?.classList.remove("d-none");
  };
  const backToMenu = (e) => {
    document.querySelector("#button-back")?.classList.add("d-none");
    let list = document.querySelectorAll(".dropdown-menu");
    for (let i = 0; i < list.length; ++i) {
      list[i].classList.remove("open");
    }
  };
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container className={"ipad-navbar container"}>
          <div className={"hidden-md"}>
            <div onClick={openMenuMB} className={"open-menu-mb hidden-md"}>
              <i className="fas fa-bars" />
            </div>
          </div>
          <Link
            href="/"
            className={"m-0 text-center d-flex flex-row align-items-center"}
          >
            <img
              src={"/images/logo_lichviet.png"}
              width={90}
              //   height={90}
              className={"img-mb__150"}
              alt={""}
            />
            <span
              className={"hidden-xs"}
              style={{
                display: "inline",
                marginLeft: "20px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#35C03C",
              }}
            >
              Xem Ngày Tốt, Tử Vi & Phong Thuỷ
            </span>
          </Link>
          <Nav className={"button-nav align-items-end"}>
            <div className="align-items-center d-flex">
              <a
                href="/kich-hoat-pro"
                className={
                  "button-active-pro hidden-xs d-flex align-items-center"
                }
              >
                <span
                  style={{ display: "inline-flex", alignItems: "center" }}
                  className="mr-2"
                >
                  {/* <IconCrown /> */}
                </span>
                <span>Nâng cấp lịch việt PRO</span>
              </a>
              {/* <LoginPC
                user={userData}
                closeMenu={() => closeMenuMb}
                logout={() => userLogout({ redireact: "login" })}
              /> */}
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        className={classMenuMB ? "ipad-flex open container" : "ipad-flex container"}
      >
        <Container id={"navbar-style"} className="p-0 w-100">
          <ul className={"nav route-link"} ref={route_link}>
            {MenuTabBar.map((item, key) => (
              <li
                className="nav-item dropdown"
                onClick={openMenuChildren}
                key={key}
              >
                {!item.children ? (
                  <a
                    onClick={closeMenuMb}
                    href={item.link}
                    data-href={item.link.replace("/", "")}
                    className="nav-link pr-0 pl-0"
                  >
                    <h2 className="pr-0 pl-0">{item.name}</h2>
                  </a>
                ) : (
                  <>
                    <h2
                      className={"show-dropdown nav-link pr-0 pl-0"}
                      data-href={item.link.replace("/", "")}
                    >
                      {item.name}
                    </h2>
                    <ul className="dropdown-menu">
                      <li onClick={backToMenu} className={"back-to-menu"}>
                        <i className="fas fa-arrow-left"></i>
                        <span>&nbsp;Quay lại</span>
                      </li>
                      {item.children.map((i, k) => (
                        <li key={k}>
                          <a onClick={closeMenuMb} href={i.link} className="">
                            {i.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Navbar>
      <div
        onClick={closeMenuMb}
        className={classMenuMB ? "close-menu open" : "close-menu"}
      >
        <i className="far fa-times-circle" />
      </div>
    </header>
  );
};

export default Header;
