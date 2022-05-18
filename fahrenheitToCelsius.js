// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

// fahrenheit to celsius
function fahrenheitToCelsius(fDegrees){
    return ((fDegrees - 32) * 5)/ 9;
}
console.log("****Fahrenheit to Celsius:");
console.log(fahrenheitToCelsius(32) + '°C');
console.log(fahrenheitToCelsius(45) + '°C');
console.log(fahrenheitToCelsius(12) + '°C');
console.log("________________________________");

// celsius to fahrenheit
function celsiusToFahrenheit(cDegrees){
    return (9/5 * cDegrees) + 32;
}
console.log("****Celsius to Fahrenheit:");
console.log(celsiusToFahrenheit(22) + '°F');
console.log(celsiusToFahrenheit(13) + '°F');
console.log(celsiusToFahrenheit(2) + '°F');