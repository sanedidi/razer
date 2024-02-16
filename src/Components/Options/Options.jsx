import React from "react";
import "./Options.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import laptop from "../../assets/laptops.png";
import mice from "../../assets/mice.png";
import keyBoard from "../../assets/keyboards.png";
import headPhone from "../../assets/headPhones.png";
import stream from "../../assets/stream.png";
import chair from "../../assets/chairs.png";
import console from "../../assets/console.png";
import mobile from "../../assets/mobile.png";
import gear from "../../assets/gear.png";
const Options = () => {
  return (
    <section className="option">
      <div className="container">
        <div className="option__wrapper">
          <div className="option__links">
            <Link className="option__link">
              <img src={laptop} alt="" />
              <p>Laptops</p>
            </Link>
            <Link className="option__link">
              <img src={mice} alt="" />
              <p>Mice</p>
            </Link>
            <Link className="option__link">
              <img src={keyBoard} alt="" />
              <p>Keyboards</p>
            </Link>
            <Link className="option__link">
              <img src={headPhone} alt="" />
              <p>Headsets</p>
            </Link>
            <Link className="option__link">
              <img src={stream} alt="" />
              <p>Streaming</p>
            </Link>
            <Link className="option__link">
              <img src={chair} alt="" />
              <p>Chairs</p>
            </Link>
            <Link className="option__link">
              <img src={console} alt="" />
              <p>Console</p>
            </Link>
            <Link className="option__link">
              <img src={mobile} alt="" />
              <p>Mobile</p>
            </Link>
            <Link className="option__link">
              <img src={gear} alt="" />
              <p>Gear</p>
            </Link>
          </div>
          <div className="option__swiper">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              loop={true}
              navigation={true}
              slidesPerView={3}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={laptop} alt="" />
                  <p>Laptops</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={mice} alt="" />
                  <p>Mice</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={keyBoard} alt="" />
                  <p>Keyboards</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={headPhone} alt="" />
                  <p>Headsets</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={stream} alt="" />
                  <p>Streaming</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={chair} alt="" />
                  <p>Chairs</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={console} alt="" />
                  <p>Console</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={mobile} alt="" />
                  <p>Mobile</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Link className="option__link">
                  <img src={gear} alt="" />
                  <p>Gear</p>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
