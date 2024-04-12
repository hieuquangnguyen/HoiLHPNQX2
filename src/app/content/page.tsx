"use client";

import styles from "../page.module.css";
import Navigation from "../navigation/page";
import Footer from "../footer/page";
import ListGroup from "react-bootstrap/ListGroup";

export default function ContentPage() {
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
              <i>Nội dung văn bản của các hoạt động sẽ được cập nhập ở đây.</i>
              <>
                <ListGroup defaultActiveKey="https://hoilhpn.org.vn/documents/20182/0/_VB_1712714791063_VB_08-TB%20VP%202024.pdf/f2d2fd55-fc5b-4c75-9be3-a8ef7d4824bb">
                  <ListGroup.Item
                    action
                    href="https://hoilhpn.org.vn/documents/20182/0/_VB_1712714791063_VB_08-TB%20VP%202024.pdf/f2d2fd55-fc5b-4c75-9be3-a8ef7d4824bb"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    1. Thông báo về việc thay đổi tên tài khoản của Văn phòng Cơ
                    quan Trung ương Hội Liên hiệp Phụ nữ Việt Nam
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="https://hoilhpn.org.vn/documents/20182/0/_VB_1709107934251_VB_3056-CV%202024.pdf/846c4098-74d5-4d33-9844-0d8652aed9d3"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    2. Văn bản trả lời kiến nghị của cử tri liên quan đến mô
                    hình tiết kiệm và tín dụng tự quản thuộc Dự án 8
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="https://hoilhpn.org.vn/documents/20182/0/_VB_1708069643649_VB_227-TB%202024.pdf/cf5dc178-1638-4d62-a0d2-fde4447fac4d"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    3. TB giới thiệu chức danh, chữ ký đồng chí Phó Chủ tịch Hội
                    LHPN VN khóa XIII nhiệm kỳ 2022-2027.
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="https://hoilhpn.org.vn/documents/20182/0/_VB_1692093800943_VB_2494-Q%C4%90-HTPNPTKT.pdf/b9612f2c-37e3-467f-b812-393e111a291c"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    4. Quyết định phê duyệt danh sách các Dự án khởi nghiệp được
                    lựa chọn vào vòng chung kết cấp vùng Cuộc thi "Phụ nữ khởi
                    nghiệp, phát huy tài nguyên bản địa" năm 2023.
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="http://hoilhpn.quangnam.gov.vn/QTIUpload/TaiNguyen/2015/TaiNguyenDienTu/6/Huong_dan_tap_huan_long_ghep_gioi_trong_cong_tac_can_bo.pdf"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    5. Hướng dẫn tập huấn lồng ghép giới trong công tác cán bộ
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="http://hoilhpn.quangnam.gov.vn/QTIUpload/TaiNguyen/2015/TaiNguyenDienTu/6/Huong_dan_tap_huan_giao_tiep_cong_vu.pdf"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    6. Tập huấn về kỹ năng giao tiếp cho phụ nữ tham chính
                  </ListGroup.Item>

                  <ListGroup.Item
                    action
                    href="http://hoilhpn.quangnam.gov.vn/QTIUpload/TaiNguyen/2015/TaiNguyenDienTu/4/Truyen_thong_thuc_day_binh_dang_gioi_trong_chinh_tri.pdf"
                    target="_blank"
                    style={{ lineHeight: "30px" }}
                  >
                    7. Kỹ năng truyền thông thúc đẩy bình đẳng giới
                  </ListGroup.Item>
                </ListGroup>
              </>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
