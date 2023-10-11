/*Mobile Menu*/
const menuToggleButton = document.getElementById("navIcon");
const menuDropdown = document.getElementById("navDropdown");
const menuOverlay = document.getElementById("dropdownOverlay");

function toggleMobileMenu() {
    menuToggleButton.classList.toggle("expanded-button");
    menuDropdown.classList.toggle("expanded-dropdown");

    menuToggleButton.classList.contains("expanded-button") ? menuToggleButton.setAttribute("aria-expanded", true) : menuToggleButton.setAttribute("aria-expanded", false);

    if (menuToggleButton.classList.contains("expanded-button")) {
        menuOverlay.style.display = "block";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
        menuOverlay.style.display = "none";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
}


menuToggleButton.addEventListener("click", ((e) => {
    toggleMobileMenu();
}))