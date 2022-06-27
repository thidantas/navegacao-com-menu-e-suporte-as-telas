import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import TelaPadrao from "./src/componentes/TelaPadrao";
import Rotas from "./src/Rotas";
import Reactotron from "reactotron-react-native";

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log({
    curso: "Alura",
  });
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
