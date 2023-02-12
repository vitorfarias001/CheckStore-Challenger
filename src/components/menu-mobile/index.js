/* Start Variables */

// Get Burger icon from HTML document
let burgerIcon = document.querySelector(".icon");

// Get the menu list of links
let menuList = document.querySelector("#menu_links_ul");

/* End Variables */

// Add the click-event to the Burger icon
burgerIcon.addEventListener("click", function () {
  // When pressing the icon, the menu will appear if it is hidden or disappear if it is visible.
  if (menuList.classList.contains("menu-hide")) {
    // Display the menu list
    menuList.classList.remove("menu-hide");
    menuList.classList.add("menu-display");
    // Set the animation of the menu icon
    burgerIcon.classList.add("change-icon");
  } else {
    // Hide the menu list
    menuList.classList.remove("menu-display");
    menuList.classList.add("menu-hide");
    // Cancel the animation of the menu icon
    burgerIcon.classList.remove("change-icon");
  }
});


