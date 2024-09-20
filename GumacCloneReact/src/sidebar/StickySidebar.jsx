import React, { useState } from "react";
import { getImageUrl } from "../utils";
import styles from "./StickySidebar.module.css";

const StickySidebar = () => {
  const sidebarElements = [
    {
      id: 0,
      name: "sale_off",
      link: "sidebar/sale_off.svg",
      text: "Sale online",
    },
    {
      id: 1,
      name: "wishlist",
      link: "sidebar/wishlist.svg",
      text: "Add to wishlist",
    },
    {
      id: 2,
      name: "hotline_call",
      link: "sidebar/hotline_call.svg",
      text: "Call to order",
    },
    {
      id: 3,
      name: "shopping_cart",
      link: "sidebar/shopping_cart.svg",
      text: "Cart",
    },
  ];

  return (
    <ul className={styles.aside_menu}>
      {sidebarElements.map((element) => (
        <li key={sidebarElements.id} className={styles.aside_item}>
          <span className={styles.aside_text}>{element.text}</span>
          <a className={styles.aside_link} href={`/${element.name}`}>
            <img src={getImageUrl(element.link)} alt={element.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StickySidebar;
