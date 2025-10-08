// ===========================
// ChatBot
// ===========================

// Referências para elementos
const botAbrir = document.getElementById('botAbrir');
const chatbot = document.getElementById('chatbot');
const botaoEnviar = document.getElementById('btnEnviar');
const resposta = document.getElementById('resposta');
const perguntaInput = document.getElementById('pergunta');

// Verifica se todos existem
if (!botAbrir || !chatbot || !botaoEnviar) {
  console.error("Algum elemento não foi encontrado no DOM.");
}

// Abre ou fecha o Chat
botAbrir?.addEventListener('click', () => {
  chatbot.style.display = (chatbot.style.display === 'block') ? 'none' : 'block';
});

// Responde à pergunta
botaoEnviar?.addEventListener('click', responderPergunta);

// Função única para responder à pergunta
function responderPergunta() {
  const texto = perguntaInput.value.trim().toLowerCase();

  if (texto.includes("ia")) {
    resposta.textContent = "A IA é a capacidade das máquinas aprenderem e tomarem decisões.";
  } else if (texto.includes("iot")) {
    resposta.textContent = "A IoT conecta dispositivos à Internet para automação e controle.";
  } else {
    resposta.textContent = "Desculpe, não tenho informação sobre isso.";
  }
}

// ===========================
// Slideshow
// ===========================

const carousel = bootstrap.Carousel.getOrCreateInstance('#headerCarousel');
if (carousel) {
  carousel.cycle();
}
