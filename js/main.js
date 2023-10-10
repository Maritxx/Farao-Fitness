/*Mobile Menu*/
const menuToggleButton = document.getElementById("navIcon");
const menuDropdown = document.getElementById("navDropdown");

function toggleMobileMenu() {
    menuToggleButton.classList.toggle("expanded-button");
    menuDropdown.classList.toggle("expanded-dropdown");

    menuToggleButton.classList.contains("expanded-button") ? menuToggleButton.setAttribute("aria-expanded", true) : menuToggleButton.setAttribute("aria-expanded", false);
}


menuToggleButton.addEventListener("click", ((e) => {
    toggleMobileMenu();
}))