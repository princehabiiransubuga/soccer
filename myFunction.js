function myFunction() {
  let nav = document.querySelector("#navlinks");
  let header = document.querySelector("header");
  let headerAnimate = document.querySelector("header.animate");

  nav.classList.toggle("hidden");
  header.classList.toggle("animate");

  let timeout = null;
  console.log("text");
  if (headerAnimate) {
    headerAnimate.classList.add("close-animate");
    timeout = setTimeout(() => {
      headerAnimate.classList.remove("close-animate");
    }, 1800);
  } else {
    header.classList.remove("close-animate");
    clearTimeout(timeout);
  }
}
