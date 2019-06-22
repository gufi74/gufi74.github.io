console.log("WSZYSTKIEGO NAJLEPSZEGO!!!");

document.getElementById("btn").addEventListener("click", openCard);

function openCard() {
    document.getElementById("cont-inact").style.display = "none";
    document.getElementById("cont-act").style.display = "flex";
}