const form = document.getElementById('form-produto');
const lista = document.getElementById('lista-produtos');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const grupo = document.getElementById('grupo').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="marcar">
    <strong>${nome}</strong> - ${quantidade} (${grupo})
  `;
  lista.appendChild(li);

  li.querySelector('.marcar').addEventListener('change', function() {
    li.classList.toggle('removido', this.checked);
    if(this.checked) {
      setTimeout(() => li.remove(), 500);
    }
  });
  form.reset();
});