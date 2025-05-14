import { useContext, useState } from "react";
import Header from "./component/header/Header";
import Main from "./pages/main/Main";
import "./styles/main.css";
import { Context, ThemeContext } from "./context/ThemeContext";


function App() {
const {isDark} = useContext(ThemeContext);
  return (
    
      <div className={`App container ${isDark ? "dark" : "light"}`}>
        <Header />
        <Main />
      </div>
  
  );
}

export default App;
