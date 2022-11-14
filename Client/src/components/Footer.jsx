import styled from "styled-components";
import ToggleThemeButton from "../utils/context/toggleTheme";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px auto;
  margin: 20px auto;
`;

function Footer() {
  return (
    <FooterContainer>
      <ToggleThemeButton />
    </FooterContainer>
  );
}

export default Footer;
