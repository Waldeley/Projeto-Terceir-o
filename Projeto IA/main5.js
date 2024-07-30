Grupo GN missão IA>js main5.js
const caixaPrincipal = document. querySelector(".caixa-principal");
const caixaPerguntas = document. querySelector(".caixa-perguntas");
const caixaAlternativa = document. querySelector(".caixa-alternativa");
const caixaResultado = document. querySelector(".caixa-resultado");
const textResultado = document. querySelector(".texto-resultado");
const perguntas = [
    {
    enunciado: "A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas. Quais são as implicações da IA na privacidade dos dados?",
    alternativas: [
    "A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança",
    "Também pode ser usada como uma ferramenta para a invasão de privacidade",
    ]
    },
    {
    enunciado: "Inteligência artificial criando artistas 100% virtuais; músicas, obra de arte,incentivando o consumo não consciente  prejudicando a tradição e cultura. Como preservar a tradição e a cultura no atual contexto regido pelas inteligências artificiais",
    alternativas: [
    "Realizando pesquisas para saber sobre suas tradições e culturas.",
    "Também pode ser usada como uma ferramenta para a invasão de privacidade.",
    ]
    },
    {
    enunciado: "A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas. Quais são as implicações da IA na privacidade dos dados?",
    alternativas: [
    "A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança,",
    "Também pode ser usada como uma ferramenta para a invasão de privacidade",
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;  
            function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = " ";
        caixapergunta.TextContent = "sim consigo alterar com o textContente!"; 
    mostraAlternativa()
    }
     function mostraAlternativa(){
     for (const alternativa of perguntaAtual1.Alternativa){
        const botaoAlternativa = document.createElement("botton");
        botãoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }

    }

        mostraPergunta()