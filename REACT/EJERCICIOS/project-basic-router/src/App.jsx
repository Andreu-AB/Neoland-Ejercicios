import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(filterCharacterIfAlive(data.results));
    })();
  }, []);

  function filterCharacterIfAlive(characters) {
    const charactersFiltered = characters.filter(
      (character) => character.status == "Alive"
    );
    console.log(charactersFiltered);
    return charactersFiltered;
  }
  return (
    <>
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>id: {character.id}</h2>
          <h2>name: {character.name}</h2>
          <h2>status: {character.status}</h2>
          <h2>origin: {character.origin.name}</h2>
          <img src={character.image} alt="" />
        </div>
      ))}
    </>
  );
};
export default App;
