import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [lang, setLang] = useState();

  const context = {
    lang: 'en',
  }

  return (
    <Context.Provider value={context}>{props.children}</Context.Provider>
  )
}

export default Provider;