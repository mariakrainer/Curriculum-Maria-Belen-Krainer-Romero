// Mostrar detalles del proyecto
function showProjectDetails(projectNumber) {
  const descriptions = [
    "Descripción completa del Proyecto 1.",
    "Descripción completa del Proyecto 2."
  ];
  
  if (projectNumber > 0 && projectNumber <= descriptions.length) {
    document.getElementById("project-description").textContent = descriptions[projectNumber - 1];
    document.getElementById("project-details").classList.remove("hidden");
  } else {
    alert("Proyecto no encontrado.");
  }
}

// Validación y confirmación de envío de formulario
document.getElementById("contact-form")?.addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Por favor, rellena todos los campos antes de enviar el formulario.");
    event.preventDefault();
    return;
  }

  alert("Formulario enviado. ¡Gracias por contactarme!");
});
