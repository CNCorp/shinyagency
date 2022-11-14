import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./index";

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
`;

export default function ToggleThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <NightModeButton onClick={() => toggleTheme()}>
      {theme === "light" ? "🌙" : "☀️"}
    </NightModeButton>
  );
}
