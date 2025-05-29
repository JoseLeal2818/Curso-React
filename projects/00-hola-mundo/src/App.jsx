import "./App.css";
import { XFollowedCard } from "./XFollowedCard.jsx";

// NOTA: LOS COMPONENTES SON FACTORYS QUE DEVUELVEN UN ELEMENTO
// REACT RENDERIZA EL ELEMENTO

const users = [
  {
    Id: 1,
    userName: "jleal-mxgs",
    name: "Jose Luis Leal V",
    isFollowing: true,
  },
  {
    Id: 2,
    userName: "JoseLeal2818",
    name: "Jose Luis",
    isFollowing: false,
  },
  {
    Id: 3,
    userName: "kervingc",
    name: "Kervin bañate un mes",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {/* Las llaves son para evaluar cosas  */}
      {/* La Key es forzazamente ponerlo ya que es para identificar el elemento como unico */}
      {users.map(({ Id, userName, name, isFollowing }) => {
        return (
          <XFollowedCard key={Id} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </XFollowedCard>
        );
      })}
    </section>
  );
}
