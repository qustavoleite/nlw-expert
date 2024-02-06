const perguntas = [
  {
    pergunta:
      "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: ["var myVar;", "variable myVar;", "let myVar;"],
    correta: 2,
  },

  {
    pergunta:
      "Qual método é usado para imprimir algo no console em JavaScript?",
    respostas: ["console.print();", "log.console();", "console.log();"],
    correta: 2,
  },

  {
    pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->",
    ],
    correta: 0,
  },

  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: ["Atribuição", "Comparação estrita", "Concatenação"],
    correta: 1,
  },

  {
    pergunta: "Como você chama uma função chamada 'myFunction' em JavaScript?",
    respostas: ["call myFunction();", "myFunction();", "invoke myFunction();"],
    correta: 1,
  },

  {
    pergunta:
      "Qual é o método JavaScript usado para selecionar um elemento HTML por sua ID?",
    respostas: [
      "document.getElementByName()",
      "document.selectById()",
      "document.getElementById()",
    ],
    correta: 2,
  },

  {
    pergunta:
      "Qual função é usada para analisar uma string e retornar um número em JavaScript?",
    respostas: ["parseInt()", "stringToNumber()", "parseString()"],
    correta: 0,
  },

  {
    pergunta:
      "Qual símbolo é usado para denotar comentários de várias linhas em JavaScript?",
    respostas: ["//", "/* */", "<!-- -->"],
    correta: 1,
  },

  {
    pergunta:
      "Qual método JavaScript é usado para remover o último elemento de um array?",
    respostas: ["pop()", "removeLast()", "deleteLast()"],
    correta: 0,
  },

  {
    pergunta: "O que o operador 'typeof' retorna em JavaScript?",
    respostas: [
      "O tipo de dado de uma variável",
      "O valor de uma variável",
      "O tamanho de uma variável",
    ],
    correta: 0,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

//pecorre sobre os elementos do array
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) //faz uma copia de todo o conteudo da tag template
  quizItem.querySelector("h3").textContent = item.pergunta

  //pecorre sobre os objetos que estao dentro do array e pega a propriedade respostas
  for (let resposta of item.respostas) {

    //pegamos o dt e cl0onamos o seu conteudo para colocar as alternativas das perguntas
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta

    //mostra na tela as alternativas das perguntas
    quizItem.querySelector("dl").appendChild(dt)
  }

  //remove o conteudo "Resposta A" da tag span
  quizItem.querySelector('dl dt').remove

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}