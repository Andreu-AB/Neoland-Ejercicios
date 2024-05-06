import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PersonasList } from "./Components/PersonasArray/PersonasArray";
import { personas } from "./Components/PersonasArray/personasData";
import { PaisesList } from "./Components/PaisesArray/PaisesArray";
import { paises } from "./Components/PaisesArray/PaisesData";

import { Header, Main, Footer, Parrafo } from "./Components";

const App = () => {
  const [count, setCount] = useState(0);
  const [mostrarPaises, setMostrarPaises] = useState(false);

  const actualizarEstado = () => {
    setCount((value) => value + 1);
    console.log("estado debajo de la actualizacion", count);
  };
  const actualizarMostrarPaises = () => {
    setMostrarPaises((value) => !value);
  };

  const print = () => {
    if (count > 5 && count < 13) {
      return <Parrafo texto={"Buenos días"} />;
    } else if (count > 12 && count < 20) {
      return <Parrafo texto={"Buenas tardes"} />;
    } else {
      return <Parrafo texto={"Buenas noches"} />;
    }
  };

  return (
    <>
      <div>
        {console.log("estado en el template ", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/*count > 4 && <p>Count es mayor que 4</p>*/}
      {print()}
      <Header />
      <Main />
      <Footer />

      <div className="card">
        <button onClick={() => actualizarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Parrafo
        className="read-the-docs"
        texto={"Click on the Vite and React logos to learn more"}
      />
      <div>
        <PersonasList personas={personas} />
      </div>
      <button onClick={() => actualizarMostrarPaises()}>
        {mostrarPaises ? "Ocultar paises" : "Mostrar paises"}
      </button>
      {mostrarPaises && (
        <div>
          <PaisesList paises={paises} />
        </div>
      )}
    </>
  );
};

export default App;
