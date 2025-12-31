const convertToCelsius = function(fahrenheitInput) {
  let celsius = (5 * (fahrenheitInput - 32)) / 9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsiusInput) {
  let fahrenheit = ((celsiusInput * 9)/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
