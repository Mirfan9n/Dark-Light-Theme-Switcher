import Posts from "./components/Posts";
import { useContext, useEffect, useState } from "react";
import {themeContext, theme} from "./context/themeContext";


function App() {
  const [Theme, setTheme] = useState(theme.light)

  function handleClick(){
    Theme === theme.light ? setTheme(theme.dark) : setTheme(theme.light)
  }

  const body = document.body;
  useEffect(()=>{
    switch (Theme) {
      case theme.light:
        body.classList.remove("bg-dark")
        body.classList.remove("text-light")  

        body.classList.add('bg-light')
        body.classList.add("text-dark")
        break;

      case theme.dark:
         body.classList.remove("bg-light")
         body.classList.remove("text-dark")

          body.classList.add("bg-dark")
          body.classList.add("text-light")
          break;
      default:
        break;
    }
  }, [Theme])
  return (

    < themeContext.Provider value = {{Theme, handleClick}} >
      <div className="mainContanor">
        <h1 className="text-center">Light Dark Theme aap</h1>
        <Posts />
      </div>
    // </themeContext.Provider>  
  );
}

export default App;
