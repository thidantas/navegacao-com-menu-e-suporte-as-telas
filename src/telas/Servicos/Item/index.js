import React from "react";
import { Text } from "react-native";

export default function Item({ nome, preco, descricao }) {
  return (
    <>
      <Text>{nome}</Text>
      <Text>{preco}</Text>
      <Text>{descricao}</Text>
    </>
  );
}
