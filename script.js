
function convert() {
    // Obtener el interruptor de Celsius a Fahrenheit
    var checkbox = document.querySelector('input[type="checkbox"]');
    // Obtener todos los elementos que tienen una temperatura por su value
    var valoresTemperatura = document.querySelectorAll('[value]');
  
    //  For Each para Recorrer todos los elementos que tienen una temperatura
    valoresTemperatura.forEach(function(elemento) {      
      var celsius = parseFloat(elemento.getAttribute('value'));// Obtener el valor de la temperatura en Celsius. parsear el string a numero float            
      var fahrenheit = checkbox.checked ? (celsius * 1.8) + 32 : celsius;// operador Ternario. si el checkbox está activado , es fahrenheit. Si no, vuelve a  celsius.
      // Actualizar el valor de la temperatura en el elemento
      elemento.innerHTML = Math.round(fahrenheit);
      // Actualizar el valor de la temperatura en el atributo "value" del elemento html
      elemento.setAttribute('value', celsius);
    });
  
    // Actualizar la etiqueta  label que muestra la unidad de temperatura
    var labelToggle = document.querySelector('.toggles');
    labelToggle.innerHTML = checkbox.checked ? '°F' : '°C';//operador ternario
  }
  