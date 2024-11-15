let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

let menuLinks = menuList.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Tutup menu ketika link diklik
        menuList.style.maxHeight = "0px";
    });
});

