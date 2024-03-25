"use client";

import styles from "../page.module.css";
import Navigation from "../navigation/page";
import Image from "next/image";
import Footer from "../footer/page";

export default function InfoPage() {
  return (
    <>
      <Navigation />
      {/* content */}
      <div className={styles.container}>
        <div className={styles.contentCover}>
          <div className={styles.tieude}>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <h3>Tin Mới</h3>
          </div>
          <div className={styles.noidung}>
            {/* KÊNH THÔNG TIN FACEBOOK */}
            <div className="row">
              <h3>
                <i
                  className="fa-brands fa-facebook fa-xl"
                  style={{ color: "#045c9f" }}
                ></i>
                <span> </span>
                KÊNH THÔNG TIN FACEBOOK CỦA HỘI
              </h3>
              {/* Hội Phụ Nữ Quế Xuân Fanpage */}
              <div className="col">
                <div className="card" style={{ width: "100%" }}>
                  <Image
                    className={styles.imageCard}
                    src="/FanpageFB.jpg"
                    alt="Landscape picture"
                    width={664}
                    height={396}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">
                      {" "}
                      <i
                        className="fa-brands fa-facebook fa-xl"
                        style={{ color: "#045c9f" }}
                      ></i>
                      <span> </span>
                      Fanpage Facebook
                    </h4>
                    <p className="">
                      Fanpage của Hội Liên Hiệp Phụ Nữ <b>Quế Xuân</b>
                    </p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100063773319709"
                      className="btn btn-primary "
                    >
                      <b>Truy Cập Fanpage</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* Hội Phụ Nữ Quế Sơn Fanpage */}
              <div className="col">
                <div className="card" style={{ width: "100%" }}>
                  <Image
                    className={styles.imageCard}
                    src="/PNQSFB.jpg"
                    alt="Landscape picture"
                    width={664}
                    height={396}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">
                      {" "}
                      <i
                        className="fa-brands fa-facebook fa-xl"
                        style={{ color: "#045c9f" }}
                      ></i>
                      <span> </span>
                      Fanpage Facebook
                    </h4>
                    <p className="card-text">
                      Fanpage của hội Liên Hiệp Phụ Nữ <b>Quế Sơn</b>
                    </p>
                    <a
                      href="https://www.facebook.com/queson.phunu"
                      className="btn btn-primary"
                    >
                      <b>Truy Cập Fanpage</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* KÊNH THÔNG TIN ZALO */}
            <div className="row">
              <div className={styles.titleZalo}>
                <Image
                  className={styles.imageZalo}
                  src="/iconZalo.png"
                  alt="Landscape picture"
                  width={100}
                  height={90}
                />
                <h3>KÊNH THÔNG TIN ZALO CỦA HỘI</h3>
              </div>
              {/* Hội Phụ Nữ Quế Xuân Fanpage */}
              <div className="col">
                <div className="card" style={{ width: "100%" }}>
                  <Image
                    className={styles.bannerLHPN}
                    src="/BannerVersion3.jpg"
                    alt="Landscape picture"
                    width={2000}
                    height={200}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Zalo Tư Vấn</h4>
                    <p className="card-text">
                      Hội Nhóm Tư Vấn - Hỏi Đáp 24/7 - LHPN Quế Xuân 2
                    </p>
                    <a
                      href="https://zalo.me/g/ezdixu640"
                      className="btn btn-primary"
                    >
                      <b>Tham Gia Nhóm</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* Hội Phụ Nữ Quế Sơn Fanpage */}
              <div className="col">
                <div className="card" style={{ width: "100%" }}>
                  <Image
                    className={styles.bannerLHPN}
                    src="/BannerVersion3.jpg"
                    alt="Landscape picture"
                    width={2000}
                    height={200}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Kênh Zalo OA</h4>
                    <p className="card-text">
                      Zalo OA Phụ Nữ Quế Xuân 2 <i>(Đang Cập Nhập)</i>{" "}
                    </p>
                    <a href="#" className="btn btn-primary">
                      <b>Tham Gia Nhóm</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* KÊNH THÔNG TIN YOUTUBE */}
            <div className="row">
              <h3>
                <i
                  className="fa-brands fa-youtube fa-2xl"
                  style={{ color: "#ff0000" }}
                ></i>
                KÊNH THÔNG TIN YOUTUBE CỦA HỘI
              </h3>
              {/* Hội Phụ Nữ Quế Xuân Fanpage */}
              <div className="col">
                <div className="card" style={{ width: "100%" }}>
                  <Image
                    className={styles.bannerLHPN}
                    src="/BannerVersion3.jpg"
                    alt="Landscape picture"
                    width={2000}
                    height={200}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">
                      <i
                        className="fa-brands fa-youtube fa-2xl"
                        style={{ color: "#ff0000" }}
                      ></i>
                      Youtube
                    </h4>
                    <p className="card-text">
                      Fanpage của Hội Liên Hiệp Phụ Nữ Quế Xuân
                    </p>
                    <a
                      href="https://www.youtube.com/@PhuNuQueXuan2?si=UnyJq1WcvsrPlyS4"
                      className="btn btn-primary"
                    >
                      <b>Xem Youtube</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
