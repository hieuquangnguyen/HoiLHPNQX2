"use client";

import styles from "../page.module.css";
import Navigation from "../navigation/page";
import Footer from "../footer/page";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import css from "./activecss.module.css";
import Accordion from "react-bootstrap/Accordion";

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
          <div className={css.noidung}>
            <Accordion defaultActiveKey="0">
              {/* Hoạt động 1 văn nghệ */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div style={{ fontSize: "20px" }}>
                    <b> 1. Hoạt động văn hóa - văn nghệ. Ngày: 30/03/2024</b>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {/* hình ảnh */}
                    <div>
                      <Carousel>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong1.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong12.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong13.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong14.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong15.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    {/* div content */}
                    <div style={{ fontSize: "20px", paddingTop: "7px" }}>
                      Ngày 30/3//2024, Hội LHPN xã phối hợp cùng Mặt trận - Đoàn
                      thể xã tổ chức đêm Hội diễn văn nghệ với sự đóng góp của
                      nhiều tiết mục đến từ cá nhân hội viên, các chi hội trên
                      toàn xã.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* Hoạt động 2 : Hoạt động dân vũ - phụ nữ sống vui - khỏe - đẹp */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div style={{ fontSize: "20px" }}>
                    <b>2. Hoạt Động Dân Vũ - Phụ Nữ Sống Vui - Khỏe - Đẹp.</b>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {/* hình ảnh */}
                    <div>
                      <Carousel>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="Danvu1.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="Danvu2.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="Danvu3.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="Danvu4.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    {/* div content */}
                    <div style={{ fontSize: "20px", paddingTop: "7px" }}>
                      Hội LHPN xã thường xuyên tổ chức giao lưu dân vũ 06 câu
                      lạc bộ dân vũ 06 CHPN thôn và trao sinh kế HVPN khó khăn.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* Hoạt động 3: Hoạt động phong trào trí lực - thể dục - thể thao */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div style={{ fontSize: "20px" }}>
                    <b>3. Hoạt Động Phong Trào Trí Lực - Thể Dục - Thể Thao</b>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {/* hình ảnh */}
                    <div>
                      <Carousel>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong31.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong32.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong33.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong34.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong35.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    {/* div content */}
                    <div style={{ fontSize: "20px", paddingTop: "7px" }}></div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* Hoạt động 4: Hoạt động thiện nguyện - an sinh xã hội */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div style={{ fontSize: "20px" }}>
                    <b>4. Hoạt Động Thiện Nguyện - An Sinh Xã Hội</b>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {/* hình ảnh */}
                    <div>
                      <Carousel>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong41.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong42.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong43.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong44.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          {/* <ExampleCarouselImage text="First slide" /> */}
                          <Image
                            src="hoatdong45.png"
                            className={css.imageCarousel}
                            width={"1200px"}
                            height={"400px"}
                            rounded
                          />
                          <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    {/* div content */}
                    <div style={{ fontSize: "20px", paddingTop: "7px" }}>
                      Hội LHPN xã thường xuyên tổ chức giao lưu dân vũ 06 câu
                      lạc bộ dân vũ 06 CHPN thôn và trao sinh kế HVPN khó khăn.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
