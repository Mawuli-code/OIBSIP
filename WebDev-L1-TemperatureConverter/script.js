// Get elements from the HTML
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");
const errorMessage = document.getElementById("error-message");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");


// Convert temperature when the button is clicked
convertButton.addEventListener("click", function () {

    // Get the input value
    const temperature = parseFloat(temperatureInput.value);

    // Get the selected unit
    const selectedUnit = unitSelect.value;


    // Validate empty or non-numeric input
    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {

        errorMessage.textContent = "Please enter a valid numeric temperature.";

        resetResults();

        return;
    }


    // Validate absolute zero
    if (selectedUnit === "celsius" && temperature < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below -273.15°C.";

        resetResults();

        return;
    }


    if (selectedUnit === "fahrenheit" && temperature < -459.67) {

        errorMessage.textContent =
            "Temperature cannot be below -459.67°F.";

        resetResults();

        return;
    }


    if (selectedUnit === "kelvin" && temperature < 0) {

        errorMessage.textContent =
            "Temperature cannot be below 0K.";

        resetResults();

        return;
    }


    // Remove previous error message
    errorMessage.textContent = "";


    // Variables for converted temperatures
    let celsius;
    let fahrenheit;
    let kelvin;


    // Perform conversion
    if (selectedUnit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (selectedUnit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5 / 9 + 273.15;

    } else if (selectedUnit === "kelvin") {

        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
        kelvin = temperature;
    }


    // Display results
    celsiusResult.textContent = `${formatTemperature(celsius)} °C`;
    fahrenheitResult.textContent = `${formatTemperature(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatTemperature(kelvin)} K`;

});


// Format numbers to a maximum of two decimal places
function formatTemperature(value) {
    return Number(value.toFixed(2));
}


// Reset result fields
function resetResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}