import React, { useState } from "react";
import { View, Text } from "react-native";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";
import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro
              estilos={estilos.quantidade}
              valor={quantidade}
              acao={setQuantidade}
            />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>0</Text>
          </View>
        </View>
        <Botao valor="Adicionar" acao={() => {}} />
      </View>
      <View style={estilos.divisor} />
    </>
  );
}
