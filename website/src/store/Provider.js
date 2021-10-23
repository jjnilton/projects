import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [lang, setLang] = useState('en');

  const setLanguange = (language) => {
    setLang(language)
  }

  const context = {
    lang: lang,
    setLanguage: setLanguange
  }

  return (
    <Context.Provider value={context}>{props.children}</Context.Provider>
  )
}

export default Provider;