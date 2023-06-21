function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var result = document.getElementById("result");
  
    if (inputUnit === "celsius") {
      var fahrenheit = (inputTemp * 9/5) + 32;
      result.innerHTML = inputTemp + "°C is equal to " + fahrenheit + "°F";
    } else if (inputUnit === "fahrenheit") {
      var celsius = (inputTemp - 32) * 5/9;
      result.innerHTML = inputTemp + "°F is equal to " + celsius + "°C";
    }
  }
  