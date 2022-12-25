const drawElement = (item) => {
  switch (item.type) {
    case "image": {
      const itemEl = document.createElement("img");
      itemEl.classList = "item image";
      itemEl.src = item.resource;
      return itemEl;
    }
    case "audio": {
      const itemEl = document.createElement("audio");
      itemEl.classList = "item audio";
      itemEl.src = item.resource;
      itemEl.controls = true;
      return itemEl;
    }
    case "video": {
      const itemEl = document.createElement("video");
      itemEl.classList = "item video";
      itemEl.src = item.resource;
      itemEl.controls = true;
      return itemEl;
    }
    default:
      return;
  }
};

export const drawGalleryItem = (item) => {
  const itemWrapEl = document.createElement("div");
  const itemTitleEl = document.createElement("div");
  itemWrapEl.classList.add("wrap-item");

  switch (item.type) {
    case "image": {
      itemTitleEl.classList = "item__title image";
      break;
    }
    case "audio": {
      itemTitleEl.classList = "item__title audio";
      break;
    }
    case "video": {
      itemTitleEl.classList = "item__title video";
      break;
    }
    default:
      return;
  }

  itemTitleEl.classList.add("item__title");
  itemTitleEl.textContent = item.title;
  itemWrapEl.appendChild(drawElement(item));
  itemWrapEl.appendChild(itemTitleEl);
  return itemWrapEl;
};
