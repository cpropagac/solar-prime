const servicos = [
  "Projeto de usinas solares",
  "Instalação residencial e comercial",
  "Venda de kits fotovoltaicos",
  "Monitoramento de produção",
  "Manutenção preventiva"
];

const ul = document.getElementById("servicos");
servicos.forEach(servico => {
  const li = document.createElement("li");
  li.textContent = servico;
  ul.appendChild(li);
});
