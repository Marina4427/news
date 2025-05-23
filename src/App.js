import { useContext } from "react";
import Header from "./component/header/Header";
import Main from "./pages/main/Main";
import "./styles/main.css";
import { ThemeContext } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/newsPage/NewsPage";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`App container ${isDark ? "dark" : "light"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news/:id" element={<NewsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
