import { Image } from "../Image/Image";

const imageUrl =
  "https://res.cloudinary.com/df10msx47/image/upload/v1714847300/React_Logo_SVG.svg_idigui.png";
const imageWidth = 200;

const Main = () => {
  return (
    <>
      <Image imageUrl={imageUrl} imageWidth={imageWidth} />
    </>
  );
};

export default Main;
