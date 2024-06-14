const mobileNav = () => {
  // Mobile nav button
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-nav");
  const body = document.body;
  const menu = document.querySelectorAll(".mobile-nav__link");
  const logo = document.querySelector(".logo");
  const logoMob = document.querySelector(".logo__mobile");
  const scrollWidth = innerWidth - body.clientWidth;

  burger.addEventListener("click", () => {
    // Переключаем стили элементов при клике
    body.setAttribute("style", "padding-right:" + scrollWidth + "px");
    nav.classList.toggle("mobile-nav--active");
    burger.classList.toggle("burger--active");
    logo.classList.toggle("logo--active");
    logoMob.classList.toggle("logo__mobile--active");
    body.classList.toggle("no-scroll");
  });

  menu.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-nav--active");
      burger.classList.remove("burger--active");
      logo.classList.toggle("logo--active");
      logoMob.classList.toggle("logo__mobile--active");
      body.classList.remove("no-scroll");
    });
  });
};

export default mobileNav;
