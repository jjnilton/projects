window.addEventListener("scroll", (event) => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("scrolled");
    document.querySelector(".header-bg").setAttribute("hidden", "true");
    document.querySelector("header > div.header-wrapper").classList.add("compact");
  } else {
    if (document.querySelector("header").classList.contains("scrolled")) {
      document.querySelector("header").classList.remove("scrolled");
      document.querySelector(".header-bg").removeAttribute("hidden");
      document.querySelector("header > div.header-wrapper").classList.remove("compact");
    }
  }
});

document.querySelector(".menu-button").addEventListener("click", (event) => {
  console.log("ai ia");
  if (document.querySelector("nav").classList.contains("visible")) {
    document.querySelector("nav").classList.remove("visible");
    document.querySelector(".menu-button").classList.remove("active");
  } else {
    document.querySelector("nav").classList.add("visible");
    document.querySelector(".menu-button").classList.add("active");
  }
});
