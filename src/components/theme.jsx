//import React from 'react'
import{ useState, useEffect } from 'react'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getLocalStorageTheme = () => {
  let theme ='light-theme';
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
}

export default function Theme() {
  const [Theme, setTheme] = useState(getLocalStorageTheme());

  let toggleTheme = () => {
    if (Theme === "light-theme") {
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  }

  useEffect(() => {
    document.documentElement.className = Theme;
    localStorage.setItem("theme", Theme);
  }, [Theme]);

 
  return (
    
    <span onClick={toggleTheme} className="flex bg-[var(--color-light)] h-10 w-10 items-center justify-center rounded-[50%] text-xl fixed bottom-[3%] right-[3%] z-[999] transition-[var(--transition)] hover:bg-[var(--color-primary)] hover:text-white">
      <FontAwesomeIcon icon={faMoon} />
    </span>
  )
}
