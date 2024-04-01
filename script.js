function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var height_unit = document.getElementById("height_unit").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var weight_unit = document.getElementById("weight_unit").value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById("result").innerText =
        "Please enter valid height and weight.";
      return;
    }

    if (height_unit === "in") {
      // Convert inches to meters
      height = height * 0.0254;
    } else {
      // Convert centimeters to meters
      height = height * 0.01;
    }

    if (weight_unit === "lbs") {
      // Convert pounds to kilograms
      weight = weight * 0.453592;
    }

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    var resultMessage = "Your BMI is " + bmi + ". ";

    if (bmi < 18.5) {
      resultMessage += "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultMessage += "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultMessage += "You are overweight.";
    } else {
      resultMessage += "You are obese.";
    }

    document.getElementById("result").innerText = resultMessage;
  }
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calculateBMI();
    }
  });