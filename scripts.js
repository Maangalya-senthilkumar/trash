document.getElementById("uploadButton").addEventListener("click", async () => {
  const fileInput = document.getElementById("imageUpload");
  const resultSection = document.getElementById("resultSection");
  const resultText = document.getElementById("resultText");
  const popup = document.getElementById("creditsPopup");

  if (fileInput.files.length === 0) {
    alert("Please upload an image!");
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("data", file);

  try {
    const response = await fetch("https://424df0bbb38feef00b.gradio.live", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Prediction failed!");
    }

    const prediction = await response.text(); // Assuming Gradio returns plain text
    resultText.textContent = prediction;

    // Show result section
    resultSection.classList.remove("hidden");

    // Show credits popup if prediction is "water_bottle"
    if (prediction === "water_bottle") {
      popup.classList.remove("hidden");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong while predicting.");
  }
});

document.getElementById("checkDustbin").addEventListener("click", () => {
  const locationInput = document.getElementById("locationInput").value.trim();
  const locationResult = document.getElementById("locationResult");

  if (!locationInput) {
    locationResult.textContent = "Please enter your location!";
    return;
  }

  // Mock response for now
  if (locationInput.toLowerCase().includes("city")) {
    locationResult.textContent = "Dustbins found in your area.";
  } else {
    locationResult.textContent = "No dustbins found nearby.";
  }
});
