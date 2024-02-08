const perguntas = [
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Nenhuma, ambos realizam a mesma operação de comparação.",
      "'==' compara apenas os valores, enquanto '===' compara os valores e os tipos de dados.",
      "'===' é uma sintaxe antiga e não deve ser utilizada mais.",
    ],
    correta: 1,
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
const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta

    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )

    dt.querySelector("input").value = item.respostas.indexOf(resposta)

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  quiz.appendChild(quizItem)
}