let popUp = document.querySelector(".main_share_popUp");
popUp.style.display = "none";

let popHere = document.querySelector(".main_share_share_share");
let popUpPc = false;
let popUpElement = document.createElement("div");

if (window.innerWidth < 1024) {
    document.querySelector(".main_share_share_share-button").addEventListener("click", () => {
        if (popUp.style.display == "none") {
            popUp.style.display = "flex";
            document.querySelector(".main_share_share_share-button").style.display ="none"
        }
    })
    
    document.querySelector(".main_share_popUp-button").addEventListener("click", ()  => {
        if (popUp.style.display == "flex") {
            popUp.style.display = "none";
            document.querySelector(".main_share_share_share-button").style.display = "inline-block"
        }
    })
}else  {
    document.querySelector(".main_share_share_share-button").addEventListener("click", () => {
        document.querySelector(".main_share_share_share-button").classList.toggle("active")
        if (!popUpPc) {
            popUpPc = true;

            //-----contents fot popUp
            let popUpText = document.createElement("h2"); //popUp text 
            popUpText.textContent = "SHARE";
            //popUP images
            let imageFacebook = document.createElement("img");
            imageFacebook.setAttribute("src", "./images/icon-facebook.svg");
            let imagePinterest = document.createElement("img");
            imagePinterest.setAttribute("src", "./images/icon-pinterest.svg");
            let imageTwitter = document.createElement("img");
            imageTwitter.setAttribute("src", "./images/icon-twitter.svg");

            //adding elements to popUP
            let popContent = document.createElement ("div");
            let square = document.createElement("div");
            square.classList.add ("square")
            popContent.classList.add ("popContent");
            popContent.appendChild(popUpText);
            popContent.appendChild(imageFacebook);
            popContent.appendChild(imageTwitter);
            popContent.appendChild(imagePinterest);
            popUpElement.appendChild(popContent)
            popUpElement.appendChild (square);
            popUpElement.classList.add ("popUpPC");
            popHere.appendChild(popUpElement);
       }
       else {
           popUpPc = false;
           popUpElement.innerHTML = "";
           popUpElement.remove();
       }
    })
}