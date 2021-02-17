const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".navlink");
const links = [];

for (let i = 0; i < pages.length; i++) {
  let link = { page: pages[i], nav: navs[i] };
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
    link.nav.classList.remove("navSelected");
  });
  link.page.style.display = "block";
  link.nav.classList.add("navSelected");
}

function navHover(link, dir) {
  if (dir == "over") link.nav.classList.add("navHover");
  if (dir == "out") link.nav.classList.remove("navHover");
}

window.addEventListener("load", () => showPage(links[0]));
