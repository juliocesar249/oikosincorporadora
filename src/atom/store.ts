import { atom } from "jotai";
import type { residentialsType } from "../types/residentials";

const residentialsState: residentialsType[] = [
  {
    id: 0,
    name: "Residencial Mileto",
    expectedDelivery: "Entrega Jul/2026",
    images: {
      structure: [
        "./assets/img/mileto/residencial-mileto-1.jpeg",
        "./assets/img/mileto/residencial-mileto-2.jpeg",
        "./assets/img/mileto/residencial-mileto-3.jpeg",
        "./assets/img/mileto/residencial-mileto-4.jpeg",
      ],
      blueprints: [
        "./assets/img/mileto/planta-mileto-1.jpeg",
        "./assets/img/mileto/planta-mileto-2.jpeg",
        "./assets/img/mileto/planta-mileto-3.jpeg",
        "./assets/img/mileto/planta-mileto-4.jpeg",
        "./assets/img/mileto/planta-mileto-5.jpeg",
        "./assets/img/mileto/planta-mileto-6.jpeg",
      ],
      onGoing: [
        "./assets/img/mileto/obras-mileto-1.jpeg",
      ]
    },
    concept: "O Residencial Mileto é um convite para a história que você e sua família podem escrever e deixar como legado em Jaraguá do Sul.\nO fato de estarmos em um terreno de esquina foi transformado em nosso maior diferencial. Mais do que singular composto por 4 casas geminadas, a arquitetura vai além do convencional, com inovação e elegância esse empreendimento cativa e traz inspiração.",
    location: {
      long: "Rua Papa João XXIII, nº 232, Jaraguá 99, Jaraguá do Sul-SC",
      short: "Jaraguá99"
    },
    characteristics: {
      surroundings: "Constante crescimento e valorização, acesso rápido e descomplicado ao centro, unindo a tranquilidade de um bairro valorizado à dinâmica urbana (proximidade imediata a comércios variados, escolas, farmácias e transporte público)",
      totalArea: "Unidades com áreas totais de 69,05 à 70,74m²",
      interior: [
        "Pé-direito alto",
        "Suíte + 01 dormitório",
        "1 Banheiro social",
        "Área de serviço e área gourmet",
        "Gesso e massa corrida",
        "Salas e cozinha integradas",
        "1 vaga de garagem"
      ]
    },
    incorporation: "Incorporação nº R.7-95.250",
    payments: [
      "À Vista",
      "Entrada + parcelas"
    ],
    donePercentage: 0.4
  },
  {
    id: 1,
    name: "Residêncial Creta",
    expectedDelivery: "Entrega Jul/2026",
    images: {
      structure: [
        "./assets/img/creta/residencial-creta-1.jpeg",
        "./assets/img/creta/residencial-creta-2.jpeg",
        "./assets/img/creta/residencial-creta-3.jpeg",
      ],
      blueprints: [
        "./assets/img/creta/planta-creta-1.jpeg",
        "./assets/img/creta/planta-creta-2.jpeg",
      ],
      onGoing: [
        "./assets/img/creta/obras-creta-2.jpeg",
      ]
    },
    concept: "O Residencial Creta é a personificação de elegância e comodidade. Nele a arquitetura vai além do convencional, as salas integradas e com pé direito alto na fachada da casa é o diferencial que traz imponência, sensação de amplitude com bom aproveitamento da luz e ventilação natural direta. O \"setup\" perfeito para quem busca conforto e sofisticação em cada detalhe.",
    location: {
      short: "João Pessoa",
      long: "Rua Manoel Tomaz de Araújo Júnior, nº 261, João Pessoa, Jaraguá do Sul-SC"
    },
    characteristics: {
      surroundings: "Situada em um bairro tranquilo, constantemente demandado, em crescimento e valorização, devido a qualidade de vida que este ambiente oferece. Seguro, calmo e de fácil acesso é um local convidativo para quem busca uma vida mais próxima da natureza e forte senso de comunidade.",
      totalArea: "Unidades com área total de 65,43 m²",
      interior: [
        "Pé-direito alto",
        "02 dormitórios",
        "1 Banheiro social com lavabo externo",
        "Área de serviço",
        "Gesso e massa corrida",
        "Salas amplas e cozinha integradas",
        "1 vaga de garagem"
      ]
    },
    incorporation: "Incorporação nº R.4-69.647",
    payments: [
      "À Vista",
      "Entrada + parcelas"
    ],
    donePercentage: 0.3
  },
];

export const residentialsAtom = atom<residentialsType[]>(residentialsState);