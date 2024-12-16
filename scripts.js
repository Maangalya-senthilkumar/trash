// JavaScript for Trash Tracker

// Handle Trash Prediction
document.getElementById("trashForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const trashImage = document.getElementById("trashImage").files[0];

    if (!trashImage) {
        alert("Please upload an image!");
        return;
    }

    // Redirect to Gradio URL
    window.open("https://d4a385a2d2987b7234.gradio.live/");
    
    // Simulate earning credits
    showPopup();
    updateCredits(10);
});

// Handle Dustbin Locator
document.getElementById("locationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const location = document.getElementById("userLocation").value;

    if (!location) {
        document.getElementById("locationResult").textContent = "Please enter a valid location!";
        return;
    }

    // Simulate dustbin location
    const result = Dustbins found near ${location}: 3 available.;
    document.getElementById("locationResult").textContent = result;
});

// Update Credits
let userCredits = 0;

function updateCredits(points) {
    userCredits += points;
    document.getElementById("userCredits").textContent = userCredits;
}

// Show Pop-up
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}
