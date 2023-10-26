
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var buyButton = document.getElementById("buyButton");

if (isMobile()) {
    console.log("User is on a mobile device");
    buyButton.classList.add("button-sm");
} else {
    console.log("User is on a desktop computer");
    buyButton.classList.add("button-lg");
}




