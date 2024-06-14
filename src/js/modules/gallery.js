const gallery = () => {
  const galleryRadios = document.querySelectorAll(".gallery__radio");
  const img = document.querySelector(".gallery__img");

  galleryRadios.forEach((radio) => {
    radio.addEventListener("click", () => {
      img.style.backgroundImage = "url(" + radio.value + ")";
    });
  });
};

export default gallery;
