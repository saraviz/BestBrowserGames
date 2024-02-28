import { JogoType } from "../types/jogo.type";
import strategy from "../mocks/images/strategy.jpeg";
import action from "../mocks/images/action.jpeg";
import shooter from "../mocks/images/shooter.jpeg";
import adventure from "../mocks/images/adventure.jpeg";
import sport from "../mocks/images/sport.jpeg";
import rpg from "../mocks/images/rpg.jpeg";
import puzzle from "../mocks/images/puzzle.jpeg";
import radical from "../mocks/images/radical.jpeg";
import arcade from "../mocks/images/arcade.jpeg";

const jogosMock: JogoType[] = [
  {
      nome: 'Guerra das Estratégias',
      categoria: 'Strategy',
      url: 'https://example.com/guerra-das-estrategias',
      urlDemostracao: 'https://example.com/demo/guerra-das-estrategias',
      descricao: 'Construa seu império e domine o mundo neste jogo de estratégia épico.',
      imagem: strategy
  },
  {
      nome: 'Ação Espacial: O Retorno',
      categoria: 'Action',
      url: 'https://example.com/acao-espacial',
      urlDemostracao: 'https://example.com/demo/acao-espacial',
      descricao: 'A batalha pelo universo está de volta! Prepare-se para ação intensa e gráficos impressionantes.',
      imagem: action
  },
  {
      nome: 'Atirador Galáctico',
      categoria: 'Shooter',
      url: 'https://example.com/atirador-galactico',
      urlDemostracao: 'https://example.com/demo/atirador-galactico',
      descricao: 'Proteja a galáxia dos invasores alienígenas neste emocionante jogo de tiro em primeira pessoa.',
      imagem: shooter
  },
  {
      nome: 'Aventuras Perdidas',
      categoria: 'Adventure',
      url: 'https://example.com/aventuras-perdidas',
      urlDemostracao: 'https://example.com/demo/aventuras-perdidas',
      descricao: 'Explore terras desconhecidas, resolva enigmas e descubra segredos antigos nesta aventura emocionante.',
      imagem: adventure
  },
  {
      nome: 'Futebol Total',
      categoria: 'Sports',
      url: 'https://example.com/futebol-total',
      urlDemostracao: 'https://example.com/demo/futebol-total',
      descricao: 'Entre em campo e mostre suas habilidades neste simulador de futebol realista e envolvente.',
      imagem: sport
  },
  {
      nome: 'Reinos da Fantasia',
      categoria: 'Role Playing Game (RPG)',
      url: 'https://example.com/reinos-da-fantasia',
      urlDemostracao: 'https://example.com/demo/reinos-da-fantasia',
      descricao: 'Escolha seu personagem e embarque em uma jornada épica através de terras mágicas e perigosas.',
      imagem: rpg
  },
  {
      nome: 'Quebra-Cabeças Misteriosos',
      categoria: 'Puzzle',
      url: 'https://example.com/quebra-cabecas-misteriosos',
      urlDemostracao: 'https://example.com/demo/quebra-cabecas-misteriosos',
      descricao: 'Resolva enigmas desafiadores e desvende segredos ocultos neste intrigante jogo de quebra-cabeça.',
      imagem: puzzle
  },
  {
      nome: 'Operação: Aniquilação',
      categoria: 'Shooter',
      url: 'https://example.com/operacao-aniquilacao',
      urlDemostracao: 'https://example.com/demo/operacao-aniquilacao',
      descricao: 'Participe de missões secretas e elimine alvos de alto valor neste intenso jogo de tiro tático.',
      imagem: shooter
  },
  {
      nome: 'Corrida Radical',
      categoria: 'Sports',
      url: 'https://example.com/corrida-radical',
      urlDemostracao: 'https://example.com/demo/corrida-radical',
      descricao: 'Acelere seu carro em pistas desafiadoras e torne-se o campeão definitivo nesta corrida emocionante.',
      imagem: radical
  },
  {
      nome: 'Aventuras na Arcádia',
      categoria: 'Arcade',
      url: 'https://example.com/aventuras-na-arcadia',
      urlDemostracao: 'https://example.com/demo/aventuras-na-arcadia',
      descricao: 'Reviva a nostalgia dos fliperamas com este conjunto de minijogos clássicos e divertidos.',
      imagem: arcade
  }
];

  export default jogosMock;
  