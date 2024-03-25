"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import navCss from "@/navcss.module.css";
// import font icon
import "@fortawesome/fontawesome-free/css/all.min.css";

// xu li active
import React, { Children, useState } from "react";

import { useEffect } from "react";

export default function Navigation() {
  const [activeNavItem, setActiveNavItem] = useState("homePage"); // Khai báo state activeNavItem và hàm setter setActiveNavItem

  useEffect(() => {
    // Lấy pathname từ URL hiện tại
    const pathname = window.location.pathname;

    // Xác định id của mục navigation tương ứng với pathname
    let activeItem = "homePage";
    if (pathname === "/info") {
      activeItem = "infoPage";
    } else if (pathname === "/active") {
      activeItem = "activePage";
    } else if (pathname === "/content") {
      activeItem = "contentPage";
    }
    // Cập nhật trạng thái activeNavItem
    setActiveNavItem(activeItem);
  }, []);

  // Xử lý sự kiện click vào mỗi mục trong navigation
  const handleNavItemClick = (id: React.SetStateAction<string>) => {
    setActiveNavItem(id);
  };

  // xử lí button thu gọn menu
  function XuLiManHinhThuGon() {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === navCss.navigation) {
      x.className += " " + navCss.responsive;
    } else {
      x.className = navCss.navigation;
    }
  }
  //xu li active

  return (
    <>
      {/* bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      ></link>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
      ></Script>
      {/* xử lí button thu gọn menu */}

      {/* font awesome, icon ngôi nhà */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      ></link>

      <>
        <div className={styles.banner}>
          <Image
            className={styles.bannerLHPN}
            src="/BannerVersion3.jpg"
            alt="Landscape picture"
            width={2000}
            height={200}
          />
        </div>
        <div className={styles.container}>
          {/* navigation */}
          <div className={navCss.navigation} id="myTopnav">
            <nav className={navCss.menu}>
              <ul>
                <li>
                  {" "}
                  <Link
                    href="/"
                    id="homePage"
                    onClick={() => handleNavItemClick("homePage")}
                    className={
                      activeNavItem === "homePage" ? navCss.active : ""
                    }
                  >
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/info"}
                    id="infoPage"
                    onClick={() => handleNavItemClick("infoPage")}
                    className={
                      activeNavItem === "infoPage" ? navCss.active : ""
                    }
                  >
                    KÊNH THÔNG TIN
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/active"}
                    id="activePage"
                    onClick={() => handleNavItemClick("activePage")}
                    className={
                      activeNavItem === "activePage" ? navCss.active : ""
                    }
                  >
                    HOẠT ĐỘNG HỘI
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/content"}
                    id="contentPage"
                    onClick={() => handleNavItemClick("contentPage")}
                    className={
                      activeNavItem === "contentPage" ? navCss.active : ""
                    }
                  >
                    VĂN BẢN HỘI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={navCss.icon}
                    onClick={() => XuLiManHinhThuGon()}
                  >
                    &#9776;
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    </>
  );
}
