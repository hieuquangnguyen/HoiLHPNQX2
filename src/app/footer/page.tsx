"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import footerCSS from "./footer.module.css";

// import font icon
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className={`${footerCSS.coverFooter} text-light py-4`}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="mb-3" style={{ color: "white", fontWeight: "700" }}>
              HỘI LIÊN HIỆP PHỤ NỮ XÃ QUẾ XUÂN 2
            </h3>
          </div>
          <div className={`${footerCSS.footerFont} row`}>
            <div className="col-md-6">
              <h4 className="mb-4" style={{ color: "black" }}>
                <b>Thông tin liên hệ</b>
              </h4>
              <p>
                <b style={{ color: "black" }}>Email</b>:{" "}
                <a
                  href="mailto:phunuqx2@gmail.com"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  phunuqx2@gmail.com
                </a>
              </p>
              <p>
                <b style={{ color: "black" }}>Số điện thoại</b>:{" "}
                <a
                  href="tel:0935257567"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  0935 257 567
                </a>
              </p>

              <p>
                <b style={{ color: "black" }}>Địa chỉ</b>: Thôn Phú Nguyên, Xã
                Quế Xuân 2, Huyện Quế Sơn, Tỉnh Quảng Nam.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="mb-4" style={{ color: "black" }}>
                <b>Truyền Thông Xã Hội</b>
              </h4>
              <p>
                <b style={{ color: "black" }}>Facebook</b>:{" "}
                <i>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063773319709"
                    className="btn btn-primary "
                  >
                    <b>Truy Cập Fanpage</b>
                  </a>
                </i>
              </p>
              <p>
                <b style={{ color: "black" }}>Zalo</b>:{" "}
                <a
                  href="https://zalo.me/g/ezdixu640"
                  className="btn btn-primary"
                >
                  <b>Tham Gia Nhóm</b>
                </a>
              </p>
              <p>
                <b style={{ color: "black" }}>Youtube</b>:{" "}
                <a
                  href="https://www.youtube.com/@PhuNuQueXuan2?si=UnyJq1WcvsrPlyS4"
                  className="btn btn-primary"
                >
                  <b>Xem Youtube</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
