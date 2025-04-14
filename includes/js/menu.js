const menuButtons = [
    { id: 1, text: "Gravel", image: "../includes/image/header/gravel.svg" },
    { id: 2, text: "Racing", image: "../includes/image/header/racing.jpg" },
    { id: 3, text: "Touring", image: "../includes/image/header/touring.jpg" },
    { id: 4, text: "E-bike", image: "../includes/image/header/ebike.jpg" },
    { id: 5, text: "Mountainbike", image: "../includes/image/header/mountainbike.jpg" },
    { id: 6, text: "Trekking", image: "../includes/image/header/trekking.jpg" },
];

function toggleBikeMenu() {
    const bikeMenu = document.getElementById("bike-menu");
    const dropDown = document.getElementById("dropdown");
    const menuText = document.getElementById("menu-text");

    dropDown.addEventListener('mouseenter', () => dropDown.src = '../includes/image/dropdown-hover.svg');
    dropDown.addEventListener('mouseleave', () => dropDown.src = '../includes/image/dropdown.svg');

    if (bikeMenu.innerHTML === "") {
        menuButtons.forEach((button) => {
            if (menuText.textContent.trim() !== button.text) {
                const item = document.createElement("div");
                item.className = "bike-item";
                item.style.backgroundImage = `url(${button.image})`;

                item.innerHTML = `
                    <div class="menu-gradient">
                        <span class="menu-label">${button.text}</span>
                        <span class="menu-arrow">›</span>
                    </div>
                `;

                // Attach event listener properly
                item.addEventListener("click", () => MenuItemClick(button.text, button.image));
                bikeMenu.appendChild(item);
            }
        });
    } else {
        bikeMenu.innerHTML = "";
    }

    // Proper rotation toggle using transform
    dropDown.style.transform = dropDown.style.transform === "rotate(-90deg)" ? "rotate(0deg)" : "rotate(-90deg)";
}

function toggleMenuLeft() {
    const menuLeft = document.getElementById("menu-left");
    const dropDown = document.getElementById("dropdown1");

    dropDown.addEventListener('mouseenter', () => dropDown.src = '../includes/image/dropdown-hover.svg');
    dropDown.addEventListener('mouseleave', () => dropDown.src = '../includes/image/dropdown.svg');

    menuLeft.style.display = menuLeft.style.display === "none" ? "flex" : "none";
    dropDown.style.transform = dropDown.style.transform === "rotate(-90deg)" ? "rotate(0deg)" : "rotate(-90deg)";
}

function MenuItemClick(text, image) {
    const LandScapeSection = document.getElementById("landscape-section");
    const menuText = document.getElementById("menu-text");
    menuText.textContent = text;
    LandScapeSection.style.backgroundImage = `url(${image})`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bike-menu").style.display = "flex";
    document.getElementById("dropdown").style.transform = "rotate(0deg)";
    document.getElementById("menu-left").style.display = "none"
});
