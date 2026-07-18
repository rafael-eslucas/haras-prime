const modal = document.getElementById("modal");

const titulo = document.getElementById("titulomodal");
const texto = document.getElementById("textomodal");
const imagem = document.getElementById("imagemmodal");

function abrirModal(servico) {
    if (servico == "hospedagem") {
        titulo.textContent = "Hospedagem";
        texto.textContent = "Oferecemos cocheiras amplas, confortáveis e monitoradas diariamente, garantindo segurança, bem-estar e todo o cuidado que seu cavalo merece.";
        imagem.src = "images/hospedagem.jpeg"
    }
    if (servico == "treinamento") {
        titulo.textContent = "Treinamento";
        texto.textContent = "Contamos com profissionais especializados que desenvolvem programas de treinamento personalizados, respeitando o ritmo e os objetivos de cada animal.";
        imagem.src = "images/treinamento.jpeg"
    }
    if (servico == "veterinaria") {
        titulo.textContent = "Assistência Veterinária";
        texto.textContent = "Nossa equipe oferece acompanhamento veterinário preventivo e atendimento de emergência, priorizando a saúde e a qualidade de vida dos cavalos.";
        imagem.src = "images/veteriaria.jpeg"
    }
    if (servico == "banho") {
        titulo.textContent = "Manejos e Cuidados";
        texto.textContent = "Realizamos alimentação balanceada, higiene, ferrageamento e monitoramento diário para manter os animais sempre saudáveis e bem cuidados.";
        imagem.src = "images/banho.jpeg"
    }
    modal.classList.add("aberto");
}

function fecharModal() {
    modal.classList.remove("aberto");
}