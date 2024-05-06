export const PaisesList = ({ paises }) => {
  return (
    <div>
      <h2>Lista de Países</h2>
      <ul>
        {paises.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
    </div>
  );
};
