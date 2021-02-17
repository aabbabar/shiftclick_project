const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".navlink");
const links = [];

for (let i = 0; i < pages.length; i++) {
  let link = { page: pages[i], nav: navs[i] };
  links.push(link);
}

pages.forEach((page) => (page.style.display = "none"));
links.forEach((link) => link.nav.addEventListener("click", () => showPage(link.page)));

function showPage(page) {
  pages.forEach((page) => (page.style.display = "none"));
  page.style.display = "block";
}
