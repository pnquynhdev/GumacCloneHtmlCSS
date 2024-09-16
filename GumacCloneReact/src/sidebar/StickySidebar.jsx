import React from "react";
import { getImageUrl } from "../utils";
import styles from "./StickySidebar.module.css";

const StickySidebar = () => {
  const sidebarElements = [
    {
      id: 0,
      name: "sale_off",
      link: "sidebar/sale_off.png",
    },
    {
      id: 1,
      name: "wishlist",
      link: "sidebar/wishlist.svg",
    },
    {
      id: 2,
      name: "hotline_call",
      link: "sidebar/hotline_call.svg",
    },
    {
      id: 3,
      name: "shopping_cart",
      link: "sidebar/shopping_cart.svg",
    },
  ];
  return (
    <aside>
      {sidebarElements.map((element, i) => (
        <div key={sidebarElements.id} className={`styles.${element.name}`}>
          <img src={getImageUrl(element.link)} alt={element.name} />
        </div>
      ))}
    </aside>
  );
};

export default StickySidebar;
