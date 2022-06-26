import React from "react";
import { FlatList } from "react-native";
import TelaPadrao from "../../componentes/TelaPadrao";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos!",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da Vacina V4. Seu gato precisa de duas.",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao:
      "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantidade: 1,
  },
];

export default function Carrinho() {
  return (
    <TelaPadrao>
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </TelaPadrao>
  );
}
