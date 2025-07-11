const form = document.getElementById('form-produto');
const lista = document.getElementById('lista-produtos');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;

  if(nome.length < 2){
    alert("Item inválido, digite novamente.");
    return;
  }

  lista.classList.add("flex");

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="marcar">
    Item: <strong>${nome}</strong> - Quantidade: <strong>${quantidade}</strong>
  `;
  lista.appendChild(li);

  li.querySelector('.marcar').addEventListener('change', function() {
    li.classList.toggle('removido', this.checked);
  });
  form.reset();
});