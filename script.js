

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");
});
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const loadingText = document.getElementById("loadingText");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

let count = 0;

const messages = [
    "Selamat Datang...",
    "Memulai pemeriksaan sistem...",
    "Memverifikasi akses...",
    "Mengamankan koneksi...",
    "Bertahan dari pemeriksaan...",
    "Hampir selesai...",
    "Berhasil diverifikasi ✓"
];

let loading = setInterval(() => {
    count++;

    progress.style.width = count + "%";
    percent.innerHTML = count + "%";

    // Ganti tulisan bertahap
    if(count === 10){
        loadingText.innerHTML = messages[1];
    }
    if(count === 30){
        loadingText.innerHTML = messages[2];
    }
    if(count === 50){
        loadingText.innerHTML = messages[3];
    }
    if(count === 70){
        loadingText.innerHTML = messages[4];
    }
    if(count === 90){
        loadingText.innerHTML = messages[5];
    }
    if(count === 100){
        loadingText.innerHTML = messages[6];
    }

    if(count >= 100){
        clearInterval(loading);

        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            document.body.style.overflow = "auto";
            content.style.display = "block";
        }, 900);
    }

}, );

function openCard(){
    document
    .getElementById("identityPopup")
    .classList.add("show");
}

function closeCard(){
    document
    .getElementById("identityPopup")
    .classList.remove("show");
}