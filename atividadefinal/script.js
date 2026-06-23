function mostrarMensagem() {
  window.location.href = "sobre.html";
}

function irProjetos() {
  window.location.href = "projetos.html";
}

function toggleDark() {
  document.body.classList.toggle("light");
}

function toggleDark() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.background = "#0a0a0a";
    document.body.style.color = "#eaeaea";
  }
}