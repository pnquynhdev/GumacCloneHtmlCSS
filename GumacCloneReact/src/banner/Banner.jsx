import { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import { getImageUrl } from "../utils";
import { ChevronLeft, ChevronRight } from "react-feather";

const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeout = null;
  const carouselImgs = [
    {
      id: 0,
      link: "banner/carousel_1.jpg",
      alt: "carousel_1",
    },
    {
      id: 1,
      link: "banner/carousel_2.jpg",
      alt: "carousel_2",
    },
    {
      id: 2,
      link: "banner/carousel_3.jpg",
      alt: "carousel_3",
    },
  ];

  const goToPrevImg = () => {
    setCurrentImg(() =>
      currentImg === 0 ? carouselImgs.length - 1 : currentImg - 1
    );
  };

  const goToNextImg = () => {
    setCurrentImg(() =>
      currentImg === carouselImgs.length - 1 ? 0 : currentImg + 1
    );
  };

  useEffect(() => {
    timeout =
      autoPlay &&
      setTimeout(() => {
        goToNextImg();
      }, 3500);
  });

  return (
    <section>
      <div className={styles.banner_container}>
        <div className={styles.advertise_cards}>
          <div className={styles.sale_prices}>
            <a href="/sale">
              <img src={getImageUrl("banner/129.png")} alt="129k" />
            </a>
            <a href="/sale">
              <img src={getImageUrl("banner/199.png")} alt="129k" />
            </a>
            <a href="/sale">
              <img src={getImageUrl("banner/299.png")} alt="129k" />
            </a>
          </div>

          <div className={styles.voucher_codes}>
            <div className={styles.voucher_wrapper}>
              <img
                src={getImageUrl("banner/voucher_code.png")}
                alt="voucher_image"
              />

              <div className={styles.voucher_code}>
                <div className={styles.code}></div>
                <div className={styles.voucher_content}>
                  <h1>VOUCHER 20k</h1>
                  <p>Giảm 20k cho đơn từ 350k</p>
                  <button>COPY MÃ</button>
                </div>
              </div>
            </div>

            <div className={styles.voucher_wrapper}>
              <img
                src={getImageUrl("banner/voucher_code.png")}
                alt="voucher_image"
              />

              <div className={styles.voucher_code}>
                <div className={styles.code}></div>
                <div className={styles.voucher_content}>
                  <h1>VOUCHER 20k</h1>
                  <p>Giảm 20k cho đơn từ 350k</p>
                  <button>COPY MÃ</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.carousel}
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(imgInterval);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          <div className={styles.carousel_items}>
            {carouselImgs.map((carouselImg, i) => (
              <div
                key={carouselImg.id}
                className={
                  currentImg === i
                    ? styles.carousel_item_selected
                    : styles.carousel_item
                }
              >
                <img
                  src={getImageUrl(carouselImg.link)}
                  alt={carouselImg.alt}
                />
              </div>
            ))}
          </div>
          <button className={styles.carousel_button_left} onClick={goToPrevImg}>
            <img src={getImageUrl("banner/left.svg")} alt="left_arrow" />
          </button>
          <button
            onClick={goToNextImg}
            className={styles.carousel_button_right}
          >
            <img src={getImageUrl("banner/right.svg")} alt="right_arrow" />
          </button>
          <div className={styles.carousel_slick_dots}>
            {carouselImgs.map((carouselImg, i) => (
              <span
                key={carouselImg.id}
                className={
                  currentImg === i
                    ? styles.slick_dot_selected
                    : styles.slick_dot
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
