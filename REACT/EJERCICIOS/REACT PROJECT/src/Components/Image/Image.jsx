import "./Image.css";
export const Image = ({ imageUrl, imageWidth }) => {
  return <img src={imageUrl} width={imageWidth} alt="React Logo" />;
};
