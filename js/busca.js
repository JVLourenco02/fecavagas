// Seleciona os elementos da página que serão usados na busca.
const formularioBusca = document.querySelector("#form-busca");
const campoBusca = document.querySelector("#termo-busca");
const filtroModalidade = document.querySelector("#filtro-modalidade");
const cardsVagas = document.querySelectorAll(".card-vaga");
const mensagemBusca = document.querySelector("#mensagem-busca");

// Padroniza o texto e remove acentos para a busca aceitar, por exemplo, "hibrido" e "híbrido".
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Mostra apenas as vagas que combinam com o texto e com a modalidade escolhida.
function filtrarVagas() {
    const termo = normalizarTexto(campoBusca.value.trim());
    const modalidade = normalizarTexto(filtroModalidade.value);
    let vagasEncontradas = 0;

    cardsVagas.forEach(function (card) {
        // O texto completo do card permite buscar cargo, empresa e requisitos.
        const textoVaga = normalizarTexto(card.textContent);
        const combinaTexto = textoVaga.includes(termo);
        const combinaModalidade = modalidade === "" || textoVaga.includes(modalidade);
        const mostrarVaga = combinaTexto && combinaModalidade;

        card.hidden = !mostrarVaga;

        if (mostrarVaga) {
            vagasEncontradas++;
        }
    });

    // Informa o resultado da pesquisa para quem está usando o site.
    if (vagasEncontradas === 0) {
        mensagemBusca.textContent = "Nenhuma vaga encontrada. Tente outro termo ou modalidade.";
    } else {
        mensagemBusca.textContent = vagasEncontradas === 1
            ? "1 vaga encontrada."
            : vagasEncontradas + " vagas encontradas.";
    }
}

// Impede o formulário de recarregar a página ao clicar em Buscar Vagas.
formularioBusca.addEventListener("submit", function (evento) {
    evento.preventDefault();
    filtrarVagas();
    document.querySelector("#vagas").scrollIntoView({ behavior: "smooth" });
});

// Atualiza os resultados também quando o usuário muda o texto ou a modalidade.
campoBusca.addEventListener("input", filtrarVagas);
filtroModalidade.addEventListener("change", filtrarVagas);

// Exibe a quantidade inicial de vagas quando a página abre.
filtrarVagas();
