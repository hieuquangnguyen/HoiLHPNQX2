"use client";

import styles from "../page.module.css";
import Navigation from "../navigation/page";
import Footer from "../footer/page";

export default function ActivePage() {
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
            <h5>
              <i>Hoạt động của hội sẽ được cập nhập vào thời gian tới!!!</i>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
