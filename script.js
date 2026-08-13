const modal = document.getElementById("modal");

const titulo = document.getElementById("titulomodal");
const texto = document.getElementById("textomodal");
const imagem = document.getElementById("imagemmodal");


const menu = document.getElementById("menu");
const links = document.getElementById("links");

function abrirServico(servico) {
    if (servico == "hospedagem") {
        titulo.textContent = "Hospedagem";
        texto.textContent = "Oferecemos cocheiras amplas, confortáveis e monitoradas diariamente, garantindo segurança, bem-estar e todo o cuidado que seu cavalo merece. Nosso espaço foi pensado para proporcionar uma estadia tranquila e acolhedora, com atenção à rotina, higiene e necessidades de cada animal. Aqui, seu cavalo recebe cuidado, conforto e acompanhamento durante toda a hospedagem.";
        imagem.src = "images/hospedagem.jpeg"
    }
    if (servico == "treinamento") {
        titulo.textContent = "Treinamento";
        texto.textContent = "Contamos com profissionais especializados que desenvolvem programas de treinamento personalizados, respeitando o ritmo e os objetivos de cada animal. As atividades são planejadas de forma cuidadosa, buscando desenvolver o condicionamento, a disciplina e o desempenho dos cavalos. Tudo isso é realizado com atenção ao bem-estar e aos limites de cada animal.";
        imagem.src = "images/treinamento.jpeg"
    }
    if (servico == "veterinaria") {
        titulo.textContent = "Assistência Veterinária";
        texto.textContent = "Nossa equipe oferece acompanhamento veterinário preventivo e atendimento de emergência, priorizando a saúde e a qualidade de vida dos cavalos. São realizados cuidados e avaliações regulares para acompanhar as condições de cada animal e identificar possíveis necessidades com antecedência. Assim, garantimos mais segurança e tranquilidade para os cavalos e seus responsáveis.";
        imagem.src = "images/veteriaria.jpeg"
    }
    if (servico == "banho") {
        titulo.textContent = "Manejos e Cuidados";
        texto.textContent = "Realizamos alimentação balanceada, higiene, ferrageamento e monitoramento diário para manter os animais sempre saudáveis e bem cuidados. Cada cavalo recebe atenção de acordo com suas necessidades, garantindo uma rotina adequada, confortável e segura. Nosso objetivo é proporcionar bem-estar e qualidade de vida em todos os momentos.";
        imagem.src = "images/banho.jpeg"
    }
    modal.classList.add("aberto");
}

function fecharServico() {
    modal.classList.remove("aberto");
}


function abrirMenu() {
    links.classList.toggle("aberto")
}


const imagens = document.querySelectorAll("#galeria-amostra img");

imagens.forEach((imagem) => 
    imagem.addEventListener('click', () =>
        window.location.href = "vacalo.html"
    )
);