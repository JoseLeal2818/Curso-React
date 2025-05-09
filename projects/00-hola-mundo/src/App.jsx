import "./App.css";
import { XFollowedCard } from "./XFollowedCard.jsx";

// NOTA: LOS COMPONENTES SON FACTORYS QUE DEVUELVEN UN ELEMENTO
// REACT RENDERIZA EL ELEMENTO

export function App() {
  return (
    <section className="App">
      <XFollowedCard userName="jleal-mxgs">Jose Luis Leal V.</XFollowedCard>
      <XFollowedCard userName="JoseLeal2818">Kervin Garcia guapo</XFollowedCard>
      <XFollowedCard userName="kervingc">
        "Prueba desde props"
      </XFollowedCard>
    </section>
  );
}
