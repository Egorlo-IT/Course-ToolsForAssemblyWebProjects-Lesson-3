import { drawGalleryItem } from "./js/drawGalleryItem";
import { db } from "./data/db";

import "./style/main.scss";

const galleryEl = document.querySelector(".gallery");

db.map((item) => {
  galleryEl.appendChild(drawGalleryItem(item));
});

document.querySelectorAll(".btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    const filter = db.filter((el) => {
      switch (e.target.textContent) {
        case "Image":
          return el.type === "image";
        case "Audio":
          return el.type === "audio";
        case "Video":
          return el.type === "video";
        default:
          return el.type === el.type;
      }
    });
    document.querySelectorAll(".wrap-item").forEach((el) => {
      el.remove();
    });
    document.querySelectorAll(".btn").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    filter.map((item) => {
      galleryEl.appendChild(drawGalleryItem(item));
    });
  });
});
