import { Title } from "../Title/Title";
import { SubTitle } from "../Subtitle/Subtitle";

const titleText = "Welcome to Components ReactJs";
const subTitleText = "This is a example components with ReactJS";

const Header = () => {
  return (
    <>
      <Title text={titleText} />
      <SubTitle text={subTitleText} />
    </>
  );
};

export default Header;
