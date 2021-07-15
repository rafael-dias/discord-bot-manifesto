const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

const armas = ["Arco", "Arco de Guerra", "Arco Longo", "Arco Sussurrante", "Arco Plangente", "Arco Badônico", "Besta", "Besta Pesada", "Besta Leve", "Repetidor Lamentoso", "Lança-virotes", "Arco de Cerco", "Cajado Amaldiçoado", "Cajado Amaldiçoado Elevado", "Cajado Demoníaco", "Cajado Execrado", "Caveira Amaldiçoada", "Cajado da Danação", "Cajado de Fogo", "Cajado de Fogo Elevado", "Cajado Infernal", "Cajado Incendiário", "Cajado Sulfuroso", "Cajado Fulgurante", "Cajado de Gelo", "Cajado de Gelo Elevado", "Cajado Glacial", "Cajado Enregelante", "Cajado de Sincelo", "Prisma Geleterno ", "Cajado Arcano", "Cajado Arcano Elevado", "Cajado Enigmático", "Cajado Feiticeiro", "Cajado Oculto", "Local Malévolo", "Cajado Sagrado", "Cajado Sagrado Elevado", "Cajado Divino", "Cajado Avivador", "Cajado Corrompido", "Cajado da Redenção", "Cajado da Natureza", "Cajado da Natureza Elevado", "Cajado Selvagem", "Cajado Druídico", "Cajado Pustulento", "Cajado Rampante", "Adaga", "Par de Adagas", "Garras", "Dessangrador", "Mãos Pretas", "Mortíficos", "Lança", "Pique", "Archa", "Lança Garceira", "Caça-espíritos", "Lança Trina", "Machado de Guerra", "Machadão", "Alabarda", "Chama-corpos", "Segadeira Infernal", "Patas de Urso", "Espada Larga", "Montante", "Espadas Duplas", "Lâmina Aclarada ", "Espada Entalhada", "Par de Galatinas", "Bordão", "Cajado Férreo", "Bilaminado", "Cajado de Monge Negro", "Seganímica", "Cajado do Equilíbrio", "Martelo", "Martelo de Batalha", "Martelo Elevado", "Martelo Fúnebre", "Martelos de Forja", "Guarda-bosques", "Maça", "Maça Pesada", "Mangual", "Maça Pétrea", "Maça Íncubo", "Cambriana", "Cria-reis", "Quebra-reino", "Jurador", "Mão da Justiça", "Modelador de Energia", "Fura-bruma do Adepto", "Canção da Alvorada", "Raíz Férrea", "Fúria Contida", "Buscador do Graal", "Cetro Sagrado", "Queda Santa", "Som Equilibrado", "Uivo Frio", "Chama-sombra", "Alvorada" ]

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let arma2 = armas[getRandomInt(0, armas.length)]
  message.delete()
  message.channel.send('🔀 '+arma2);
};