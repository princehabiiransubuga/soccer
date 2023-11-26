function myFunction() {
  let x = document.querySelector("#navlinks");
  let y = document.querySelector("#hamburger-opened");
  let z = document.querySelector("#hamburger-closed");
  console.log(x);
  x.classList.toggle("block")
  y.classList.toggle("hidden")
  z.classList.toggle("hidden")

}
