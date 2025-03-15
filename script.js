function toggleSideNav(isShow) {
  const sideNav = document.querySelector(".sideNav");
    if (!isShow) {
        sideNav.style.display = "none";
    } else {
        sideNav.style.display = "flex";
    }
}
