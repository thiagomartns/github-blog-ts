import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styles";
import Logo from "/assets/img/Logo.png";

export const Header = () => {
  const navigate = useNavigate();

  const handleClickHeader = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <img onClick={handleClickHeader} src={Logo} alt="" />
    </HeaderContainer>
  );
};
