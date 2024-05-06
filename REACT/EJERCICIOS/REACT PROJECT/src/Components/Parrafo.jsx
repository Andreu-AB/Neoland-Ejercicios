/** HACEMOS EL DESTRUCTURING EN OTRA LINEA */

const Parrafo = (props) => {
  const { texto, className } = props;
  console.log("🚀 ~ Parrafo ~ props:", props);

  return <p className={className}>{texto}</p>;
};

export default Parrafo;
/**
 * 
 * COMPONENTE HACIENDO EL DESTRUCTURIN EN LOS PARENTESIS DE LAS PROPS
 * 
 * 
 * export const Parrafo = ({ texto, className }) => {
  return <p className={className}>{texto}</p>;
};*/
