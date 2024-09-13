import React from "react";
import styles from "./Banner.module.css";
import { getImageUrl } from "../utils";

const Banner = () => {
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
            <img src={getImageUrl("banner/voucher_code.png")} alt="voucher_image" />
            <div className={styles.voucher_content}>
              <h1>VOUCHER 20k</h1>
              <p>Giảm 20k cho đơn từ 350k</p>
              <button>COPY MÃ</button>
            </div>
            </div>
            <div className={styles.voucher_wrapper}>
            <img src={getImageUrl("banner/voucher_code.png")} alt="voucher_image" />
            <div className={styles.voucher_content}>
              <h1>VOUCHER 20k</h1>
              <p>Giảm 20k cho đơn từ 350k</p>
              <button>COPY MÃ</button>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carousel_items}>
            <div className={styles.carousel_item}>
              <img
                src={getImageUrl("banner/carousel_1.jpg")}
                alt="carousel_1"
              />
            </div>
            <div className={styles.carousel_item_selected}>
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
            </div>
          </div>
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
