function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("result").innerHTML = `${celsius} °C is ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById("fahrenheit").value = '';
        document.getElementById("result").innerHTML = '';
    }
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("result").innerHTML = `${fahrenheit} °F is ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById("celsius").value = '';
        document.getElementById("result").innerHTML = '';
    }
}
