import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import { servicos } from "../../../mocks/servicos";

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
