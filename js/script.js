const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let cep = document.getElementById("cep").value;
  let rua = document.getElementById("rua").value;
  let numero = document.getElementById("numero").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let data = {
    nome,
    email,
    cpf,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
  };

  let convertData = JSON.stringify(data);

  localStorage.setItem("client", convertData);

  let content = document.getElementById("content");

  let carregando = `<p>Cadastrando...</p>`;
  let pronto = `<p>Cliente cadastrado com sucesso </p>`;
  let ok = "";

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);

  setTimeout(() => {
    content.innerHTML = ok;
  }, 4000);
  setTimeout(() => {
    form.reset();
  }, 3000);
});
