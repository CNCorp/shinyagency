import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPS
import Header from "./components/Header";
// PAGES
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Freelances from "./pages/Freelances";
import Error from "./pages/Error";
import { SurveyProvider, ThemeProvider } from "./utils/context";
import GlobalStyle from "./utils/style/globalStyle";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <SurveyProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/survey/:questionNumber" element={<Survey />} />
            <Route exact path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
