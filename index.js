const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".navlink");
const links = [];

for (let i = 0; i < pages.length; i++) {
  let link = { page: pages[i], nav: navs[i], isLive: false };
  links.push(link);
}

links.forEach((link) => {
  link.page.style.display = "none";
  link.nav.addEventListener("click", () => showPage(link));
  link.nav.addEventListener("mouseover", () => navHover(link, "over"));
  link.nav.addEventListener("mouseout", () => navHover(link, "out"));
});

function showPage(link) {
  links.forEach((link) => {
    link.page.style.display = "none";
    link.nav.style.color = "rgb(55, 55, 55)";
    link.nav.style.textDecoration = "none";
    link.isLive = false;
  });
  link.page.style.display = "block";
  link.nav.style.color = "rgb(153, 255, 0)";
  link.nav.style.textDecoration = "underline";
  link.nav.style.textDecorationStyle = "double";
  link.isLive = true;
}

function navHover(link, dir) {
  if (!link.isLive) {
    if (dir == "over") link.nav.style.color = "rgb(153, 255, 0)";
    if (dir == "out") link.nav.style.color = "rgb(55, 55, 55)";
  }
}

window.addEventListener("load", () => showPage(links[0]));
