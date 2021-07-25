const form = document.getElementById("formProd");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let sku = document.getElementById("sku").value;
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let largura = document.getElementById("largura").value;
  let descricao = document.getElementById("descricao").value;

  let data = {
    sku,
    nome,
    peso,
    altura,
    largura,
    descricao,
  };

  let convertData = JSON.stringify(data);

  localStorage.setItem("product", convertData);

  let content = document.getElementById("content");

  let carregando = `<p>Cadastrando...</p>`;
  let pronto = `<p>Produto cadastrado com sucesso </p>`;
  let ok = "";

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);

  setTimeout(() => {
    content.innerHTML = ok;
  }, 3000);
  setTimeout(() => {
    form.reset();
  }, 3000);
});
