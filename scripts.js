function navToggle() {
  var navBar = document.getElementById("navBar");
  if (navBar.className === "nav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "nav";
  }
}
