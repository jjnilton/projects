import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');

  const handleLanguageChange = (language) => {
    setLang(language)
  }

  const handleThemeChange = (themeName) => {
    setTheme(themeName)
  }

  const context = {
    lang: lang,
    theme,
    setLanguage: handleLanguageChange,
    setTheme: handleThemeChange
  }

  return (
    <Context.Provider value={context}>{props.children}</Context.Provider>
  )
}

export default Provider;