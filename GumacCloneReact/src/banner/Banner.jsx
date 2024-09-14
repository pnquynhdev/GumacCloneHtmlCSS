import { useState } from "react";
import styles from "./Banner.module.css";
import { getImageUrl } from "../utils";
import { ChevronLeft, ChevronRight } from "react-feather";

const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
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

  const prevImg = () => {
    setCurrentImg((currentImg) =>
      currentImg === 0 ? carouselImgs.length - 1 : currentImg - 1
    );
    console.log(currentImg);
  };

  const nextImg = () => {
    setCurrentImg((currentImg) =>
      currentImg === carouselImgs.length - 1 ? 0 : currentImg + 1
    );
    console.log(currentImg);
  };

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
            <div className={styles.voucher_code}>
              <img
                src={getImageUrl("banner/voucher_code.png")}
                alt="voucher_image"
              />
              <div className={styles.voucher_wrapper}>
                <div className={styles.code}></div>
                <div className={styles.voucher_content}>
                  <h1>VOUCHER 20k</h1>
                  <p>Giảm 20k cho đơn từ 350k</p>
                  <button>COPY MÃ</button>
                </div>
              </div>
            </div>
            <div className={styles.voucher_code}>
              <img
                src={getImageUrl("banner/voucher_code.png")}
                alt="voucher_image"
              />
              <div className={styles.voucher_wrapper}>
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
        <div className={styles.carousel}>
          <div className={styles.carousel_items}>
            {carouselImgs.map((carouselImg) => (
              <div key={carouselImg.id} className={styles.carousel_item}>
                <img
                  src={getImageUrl(carouselImg.link)}
                  alt={carouselImg.alt}
                />
              </div>
            ))}
            {/* <div className={styles.carousel_item_selected}>
              <img
                src={getImageUrl("banner/carousel_2.jpg")}
                alt="carousel_2"
              />
            </div>
            <div className={styles.carousel_item}>
              <img
                src={getImageUrl("banner/carousel_3.jpg")}
                alt="carousel_3"
              />
            </div> */}
          </div>
          <button className={styles.carousel_button} onClick={prevImg}>
            <ChevronLeft />
          </button>
          <button className={styles.carousel_button} onClick={nextImg}>
            <ChevronRight />
          </button>
          <div className={styles.carousel_slick_dots}>
            <span></span>
            <span className={styles.selected}></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
