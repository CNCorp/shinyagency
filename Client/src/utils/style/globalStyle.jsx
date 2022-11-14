import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#202020" : "#fff")};
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  }

  a {
    text-decoration: none ;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
    transition: all 0.2s ease-in-out;
    &:hover {
        color: aquamarine;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  section {
    padding : 2rem 1rem;
  }
  
  header {
    padding : 2rem;
  }
  
  nav {
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     margin-left: -50px ;
   }
  `;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext);

  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
