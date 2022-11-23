import { Link } from "react-router-dom";
import ToggleThemeButton from "../../utils/context/toggleTheme";

const Header = () => {
  return (
    <header>
      <nav>
        <ToggleThemeButton />
        <Link to="/">Home</Link>
        <Link to="freelances">Freelances</Link>
        <Link to="/survey/1">Survey</Link>
      </nav>
    </header>
  );
};

export default Header;
