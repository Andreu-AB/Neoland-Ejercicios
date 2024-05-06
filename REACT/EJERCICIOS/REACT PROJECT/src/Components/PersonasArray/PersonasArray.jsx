export const PersonasList = ({ personas }) => {
  return (
    <div>
      <h2>Lista de Personas</h2>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {persona.nombre}, <strong>Edad:</strong>{" "}
            {persona.edad}, <strong>Ciudad:</strong> {persona.ciudad}
          </li>
        ))}
      </ul>
    </div>
  );
};
