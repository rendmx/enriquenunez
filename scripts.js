document.addEventListener("DOMContentLoaded", function() {
  // Mostrar gradualmente la imagen principal en la página de inicio
  var mainImage = document.getElementById("main-image");
  setTimeout(function() {
    mainImage.style.opacity = "1";
  }, 500);

  // Ocultar la imagen después de un tiempo en la página de inicio
  setTimeout(function() {
    mainImage.style.opacity = "0";
  }, 5000);

  // Redirigir a main.html después de inicio.html
  if (window.location.pathname.endsWith("index.html")) {
    setTimeout(function() {
      window.location.href = "main.html";
    }, 7000);
  }

  // Mostrar el encabezado y el pie de página gradualmente
  setTimeout(function() {
    document.querySelector("header").style.opacity = "1";
    document.querySelector("footer").style.opacity = "1";
  }, 1000);

  // Mostrar los íconos gradualmente después de cargar la página
  setTimeout(function() {
    var icons = document.querySelectorAll(".icon");
    icons.forEach(function(icon, index) {
      setTimeout(function() {
        icon.style.opacity = "1";
      }, index * 1000); // Ajusta el tiempo de espera según el índice para crear el efecto de aparición secuencial
    });
  }, 700); // Ajusta el tiempo de espera inicial según tus necesidades

        setTimeout(function() {
        document.querySelector('main').style.display = 'block';
        document.querySelector('main').classList.add('fadeIn');
      }, 300); 
});


  
  