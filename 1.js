var current = document.querySelector("#main-image");
var imgs = document.querySelectorAll(".images img");
var opacity = 0.6;



imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  
  imgs.forEach(img => img.style.opacity = 1);

  current.src = e.target.src;

  current.classList.add("fade-in");

  setTimeout(fade => current.classList.remove("fade-in"), 500);

  e.target.style.opacity = opacity;
}
