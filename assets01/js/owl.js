$('.owl-carousel01').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});








document.addEventListener("DOMContentLoaded", function () {

    const selector = document.getElementById("countrySelector");
    const dropdown = document.getElementById("countryDropdown");
    const selectedFlag = document.getElementById("selectedFlag");
    const phoneInput = document.getElementById("exampleFormName3");

    // Toggle dropdown
    selector.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });

    // Select country
    document.querySelectorAll(".country-item").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.stopPropagation();

            // Change flag
            selectedFlag.src = this.dataset.flag;

            // Change placeholder
            switch (this.textContent.trim()) {
                case "UAE":
                    phoneInput.placeholder = "+971 50 123 4567";
                    break;

                case "India":
                    phoneInput.placeholder = "+91 98765 43210";
                    break;

                case "USA":
                    phoneInput.placeholder = "+1 (555) 123-4567";
                    break;

                case "UK":
                    phoneInput.placeholder = "+44 7123 456789";
                    break;
            }

            dropdown.style.display = "none";
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdown.style.display = "none";
    });

});




const settingMenuIcon = document.getElementById("setting-menu-icon");
const settingSidebar = document.getElementById("settingSidebar");
const settingOverlay = document.getElementById("settingOverlay");

// Open Sidebar
settingMenuIcon.addEventListener("click", function () {
    settingSidebar.classList.add("show");
    settingOverlay.classList.add("show");
});

// Close Sidebar when clicking Overlay
settingOverlay.addEventListener("click", function () {
    settingSidebar.classList.remove("show");
    settingOverlay.classList.remove("show");
});

// Close Sidebar when any Settings Menu button is clicked
document.querySelectorAll(".vnav-link").forEach(function (button) {

    button.addEventListener("click", function () {

        if (window.innerWidth < 1200) {
            settingSidebar.classList.remove("show");
            settingOverlay.classList.remove("show");
        }

    });

});


window.addEventListener("resize", function () {

    if (window.innerWidth >= 1200) {
        settingSidebar.classList.remove("show");
        settingOverlay.classList.remove("show");
    }

});










