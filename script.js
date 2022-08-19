const menuItems = document.querySelectorAll(".menu__link");
const menuToggle = document.querySelector(".nav-toggle");

menuItems.forEach(item => {
  item.addEventListener('mouseover', (event) => {
    menuToggle.classList.add("rotates");
  });
});



menuItems.forEach(item => {
  item.addEventListener('mouseout', (event) => {
    menuToggle.classList.remove("rotates");
  });
});
