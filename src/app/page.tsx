"use client";

import styles from "./page.module.css";
import Navigation from "./navigation/page";
import Footer from "./footer/page";
export default function Home() {
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
            <p>
              Nhằm cụ thể hóa khâu đột phá “Đổi mới phương thức hoạt động Hội,
              trọng tâm là ứng dụng thông tin” và chủ đề năm 2024 “Đẩy mạnh ứng
              dụng công nghệ thông tin trong hoạt động Hội”, Đoàn Chủ tịch TƯ
              Hội LHPN Việt Nam xây dựng kế hoạch tổ chức cuộc thi “Ứng dụng
              công nghệ thông tin trong tổ chức sinh hoạt Hội” năm 2024. Hội
              Liên hiệp Phụ nữ xã Quế Xuân 2 hưởng ứng chú trọng ứng dụng chuyển
              đổi số vào công tác Hội. Thực hiện sáng tạo đồng loại đa nền tảng
              các kênh truyền thông nhằm thu hút Hội viên, Phụ nữ thường xuyên
              nằm bắt các thông tin, huy động sự tham gia tích cực của hội viên
              trong đổi mới hình thức tổ chức sinh hoạt.
            </p>
            <p>
              Giải pháp ứng dụng công nghệ thông tin của Hội LHPN xã Quế Xuân 2
              trong tổ chức sinh hoạt hội viên là việc ứng dụng các phần mềm,
              công cụ kỹ thuật số, nền tảng số… tạo trang website để tích hợp
              các ứng dụng, phầm mềm thiết kế các nội dung truyền thông, hình
              thức tổ chức sinh hoạt tại chi hội, tổ phụ nữ. Được áp dụng trong
              tổ chức sinh hoạt chi, tổ Hội theo hình thức sinh hoạt chuyên đề
              với các chủ đề sinh hoạt thuộc nhiệm vụ công tác Hội (phổ biến,
              tuyên truyền các chủ trương, chính sách của Đảng, Nhà nước và pháp
              luật, nhiệm vụ chính trị của địa phương; triển khai phong trào thi
              đua, cuộc vận động, các hoạt động giáo dục truyền thống; các giải
              pháp giải quyết các vấn đề cấp thiết của phụ nữ, trẻ em…).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
