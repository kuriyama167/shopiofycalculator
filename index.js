function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('result').innerText = 'Please enter valid height and weight.';
      return;
    }
  
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
  
    var resultMessage = 'Your BMI is ' + bmi + '. ';
  
    if (bmi < 18.5) {
      resultMessage += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultMessage += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultMessage += 'You are overweight.';
    } else {
      resultMessage += 'You are obese.';
    }
  
    document.getElementById('result').innerText = resultMessage;
  }
  