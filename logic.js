const menuBTN = document.querySelector("#navbarExtendBTN"); // Navbar : mengambil elemen tombol menu
const menu = document.querySelector("#navbarExtended"); // Navbar : mengambil elemen menu

let isOpen = false; // Navbar : status menu (open/close)
menuBTN.addEventListener("click", () => { // Navbar : logika menu mobile
    if (!isOpen) {
        menu.style.display = "flex";
        menuBTN.textContent = "close"; // Navbar : ganti icon menjadi close (X)
        isOpen = true;
    } else {
        menu.style.display = "none";
        menuBTN.textContent = "menu"; // Navbar : ganti icon menjadi menu (≡)
        isOpen = false;
    }
});