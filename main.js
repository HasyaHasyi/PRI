
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    actClass(homeButton);
});

const homeButton = document.getElementById("home-button");
const ticketButton = document.getElementById("ticket-button");
const venueButton = document.getElementById("venue-button");
const merchButton = document.getElementById("merch-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");
const buyButton = document.getElementById("buyButton");
const buyButtons = document.querySelectorAll('.buy-button');

if (isMobile()) {
    buyButton.classList.add("button-sm");
} else {
    buyButton.classList.add("button-lg");
}

homeButton.addEventListener("click", function() {
    // code to execute when home button is clicked
    actClass(homeButton);
});

ticketButton.addEventListener("click", function() {
    // code to execute when ticket button is clicked
    actClass(ticketButton);
    const ticketDiv = document.getElementById("ticket");
    ticketDiv.scrollIntoView({behavior: "smooth"});
});

venueButton.addEventListener("click", function() {
    // code to execute when venue button is clicked
    actClass(venueButton);
    const venueDiv = document.getElementById("venue");
    venueDiv.scrollIntoView({behavior: "smooth"});
});

merchButton.addEventListener("click", function() {
    // code to execute when merch button is clicked
    actClass(merchButton);
});

aboutButton.addEventListener("click", function() {
    // code to execute when about button is clicked
    actClass(aboutButton);
    const aboutDiv = document.getElementById("about");
    aboutDiv.scrollIntoView({behavior: "smooth"});
});

contactButton.addEventListener("click", function() {
    // code to execute when contact button is clicked
    actClass(contactButton);
    const contactDiv = document.getElementById("contact");
    contactDiv.scrollIntoView({behavior: "smooth"});
});

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", function() {
        // code to execute when a buy button is clicked
        window.location.href = "/ticket";
    });
});





function actClass(button) {
    homeButton.classList.remove("navAct");
    ticketButton.classList.remove("navAct");
    venueButton.classList.remove("navAct");
    merchButton.classList.remove("navAct");
    aboutButton.classList.remove("navAct");
    contactButton.classList.remove("navAct");
    button.classList.add("navAct");
}





