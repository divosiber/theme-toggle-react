import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const savedTheme = localStorage.getItem("theme") || 'light'
  const [theme, setTheme] = useState(savedTheme);

  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])

  return (
    <>
      <div className={` min-h-screen duration-1000 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
        <Header theme={theme} setTheme={setTheme}/>
        <div className="max-w-[1140px] mx-auto px-4 mt-3">
          <div className="flex gap-8 max-md:flex-wrap">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
