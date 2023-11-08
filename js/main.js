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
}));


/*Packages Selection*/
function changePrice(selectedMonths, clickedButton) {
    const budgetPriceElement = document.getElementById("budgetPrice");
    const fullServicePriceElement = document.getElementById("fullServicePrice");
    const tryOutTextElement = document.getElementById("tryOutText");
    const allCostButtons = document.getElementsByClassName("button__kosten");

    Array.from(allCostButtons).forEach((button) => {
        if (button.classList.contains("button__kosten--active")) {
            button.classList.remove("button__kosten--active");
        }
    })

    switch(selectedMonths) {
        case 1:
            budgetPriceElement.textContent = "30";
            fullServicePriceElement.textContent = "50";
            clickedButton.classList.add("button__kosten--active");
            tryOutTextElement.style.visibility = "visible";
            break;
        case 3:
            budgetPriceElement.textContent = "150";
            fullServicePriceElement.textContent = "200";
            clickedButton.classList.add("button__kosten--active");
            tryOutTextElement.style.visibility = "hidden";
            break;
        case 6:
            budgetPriceElement.textContent = "250";
            fullServicePriceElement.textContent = "350";
            clickedButton.classList.add("button__kosten--active");
            tryOutTextElement.style.visibility = "hidden";
            break;
        case 12:
            budgetPriceElement.textContent = "400";
            fullServicePriceElement.textContent = "600";
            clickedButton.classList.add("button__kosten--active");
            tryOutTextElement.style.visibility = "hidden";
            break;
    }
}