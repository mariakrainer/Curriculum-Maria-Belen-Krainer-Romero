// Mostrar detalles del proyecto al hacer clic
function showProjectDetails(projectNumber) {
    const descriptions = [
      "Este es el Proyecto 1. Descripción completa del proyecto.",
      "Este es el Proyecto 2. Descripción completa del proyecto.",
      "Este es el Proyecto 3. Descripción completa del proyecto."
    ];
  
    document.getElementById("project-description").textContent = descriptions[projectNumber - 1];
    document.getElementById("project-details").classList.remove("hidden");
  }
  
  // Simulación de envío de formulario
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado. ¡Gracias por contactarme!");
  });
  