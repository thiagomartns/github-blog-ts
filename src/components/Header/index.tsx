import { HeaderContainer } from "./styles";
import Logo from "/assets/img/Logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  );
};
