const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".navlink");
const icons = document.querySelectorAll(".icon");
const links = [];

for (let i = 0; i < pages.length; i++) {
  let link = { page: pages[i], nav: navs[i] };
  links.push(link);
}

links.forEach((link) => {
  link.page.style.display = "none";
  link.nav.addEventListener("click", () => showPage(link));
});

icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => iconHover(icon, "over"));
  icon.addEventListener("mouseout", () => iconHover(icon, "out"));
});

function showPage(link) {
  links.forEach((link) => {
    link.page.style.display = "none";
    link.nav.classList.remove("navSelected");
  });
  link.page.style.display = "block";
  link.nav.classList.add("navSelected");
}

function iconHover(icon, dir) {
  if (dir == "over") icon.classList.add("iconHover");
  if (dir == "out") icon.classList.remove("iconHover");
}

window.addEventListener("load", () => showPage(links[0]));
