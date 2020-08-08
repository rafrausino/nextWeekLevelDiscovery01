// Procurar o botao
document
  .querySelector("#add-time")
  // Quano clicar no botao
  .addEventListener("click", cloneField);

// Executar uma acao
function cloneField() {
  // Duplicar os campos. Que campos?
  const newFielContainer = document
    .querySelector(".schedule-items")
    .cloneNode(true);

  // pegar cada campo. que campos?
  const fields = newFielContainer.querySelectorAll("input");

  // para cada campo, limpar
  fields.forEach(function (field) {
    // pega o field do momento e limpa ele
    field.value = "";
  });

  // Colocar na página: onde??
  document.querySelector("#schedule-item").appendChild(newFielContainer);
}
