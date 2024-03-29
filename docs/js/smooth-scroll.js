const links = document.querySelectorAll('a[href*="#"]');

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const offsetTop = document.querySelector(links).offsetTop;

    scroll({
        top:offsetTop,
        behavior: "smooth"
    })
};