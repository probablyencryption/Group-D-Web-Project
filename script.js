// Marquee animation
document.addEventListener("DOMContentLoaded", (event) => {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll("nav a");
  const menuLength = menuItems.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItems[i].href === currentLocation) {
      menuItems[i].className = "active";
    }
  }
});
