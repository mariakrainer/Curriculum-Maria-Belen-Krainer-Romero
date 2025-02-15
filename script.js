// Mostrar detalles del proyecto
function showProjectDetails(projectNumber) {
    const descriptions = [
      "Descripción completa del Proyecto 1.",
      "Descripción completa del Proyecto 2."
    ];
    document.getElementById("project-description").textContent = descriptions[projectNumber - 1];
    document.getElementById("project-details").classList.remove("hidden");
  }
  
  // Confirmación de envío de formulario
  document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado. ¡Gracias por contactarme!");
  });
  
