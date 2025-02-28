// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password"); // Botão para gerar senha
const generatedPasswordElement = document.querySelector("#generated-password"); // Elemento onde a senha gerada será exibida

// Novas funcionalidades
const openCloseGeneratorBtn = document.querySelector("#open-generate-password"); // Botão para abrir/fechar opções de geração
const generatePasswordContainer = document.querySelector("#generate-options"); // Container com as opções de geração
const lengthInput = document.querySelector("#length"); // Input para definir o tamanho da senha
const lettersInput = document.querySelector("#letters"); // Checkbox para incluir letras
const numbersInput = document.querySelector("#numbers"); // Checkbox para incluir números
const symbolsinput = document.querySelector("#symbols"); // Checkbox para incluir símbolos (deveria ser "symbolsInput" para manter a padronização)
const copyPasswordButton = document.querySelector("#copy-password"); // Botão para copiar a senha

// Funções para gerar caracteres aleatórios
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Gera uma letra minúscula aleatória
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Gera uma letra maiúscula aleatória
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString(); // Gera um número aleatório entre 0 e 9
};

const getSymbols = () => {
  const symbols = "/[]{}<>=|.,!@#$%¨&*()_-+=";
  return symbols[Math.floor(Math.random() * symbols.length)]; // Retorna um símbolo aleatório da lista
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbols
) => {
  let password = "";
  
  const passwordLength = +lengthInput.value; // Obtém o comprimento da senha do input e converte para número
  const generators = [];

  // Adiciona as funções geradoras conforme as opções selecionadas
  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsinput.checked) { // Deve ser corrigido para "symbolsInput"
    generators.push(getSymbols);
  }

  if (generators.length === 0) { // Se nenhum tipo de caractere for selecionado, a função retorna sem gerar senha
    return;
  }

  // Loop para gerar a senha
  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue; // Adiciona o caractere gerado à senha
    });
  }
  password = password.slice(0, passwordLength); // Garante que a senha terá o tamanho exato definido pelo usuário

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password; // Exibe a senha gerada
};

// Eventos
// Chama a função de gerar senha ao clicar no botão
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols
  );
});

// Alterna a visibilidade do container de opções ao clicar no botão
openCloseGeneratorBtn.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide");
});

// Copia a senha gerada para a área de transferência
copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordElement.querySelector("h4").innerText;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada com sucesso!";

    setTimeout(() => {
      copyPasswordButton.innerHTML = "Copiar";
    }, 1000); // Reseta o texto do botão após 1 segundo
  });
});