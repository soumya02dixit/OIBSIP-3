function convertTemperature() {
  var temperature = parseFloat(document.getElementById('temperature').value);
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit = document.getElementById('toUnit').value;
  var resultElement = document.getElementById('result');
  var result;

  if (isNaN(temperature)) {
      result = "Please enter a valid number for temperature.";
  } else {
      result = convert(temperature, fromUnit, toUnit);
  }

  resultElement.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function convert(temperature, fromUnit, toUnit) {
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      return (temperature * 9/5) + 32;
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      return temperature + 273.15;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      return (temperature - 32) * 5/9;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      return (temperature - 32) * 5/9 + 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      return temperature - 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      return (temperature - 273.15) * 9/5 + 32;
  } else {
      // If fromUnit and toUnit are the same, or invalid units are selected
      return temperature;
  }
}
