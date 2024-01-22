let popUp = document.querySelector(".main_share_popUp");
popUp.style.display = "none";

document.querySelector(".main_share_share_share-button").addEventListener("click", () => {
    if (popUp.style.display == "none") {
        popUp.style.display = "flex";
    }
})

document.querySelector(".main_share_popUp-button").addEventListener("click", ()  => {
    if (popUp.style.display == "flex") {
        popUp.style.display = "none";
    }
})