import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
};

export default App;
