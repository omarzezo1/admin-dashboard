import { createContext } from "react"

const ThemeContext = createContext()

const theme = {
    dark: {
        bgColor: "#111",
        colorOpacity: "#222",
        hoverColor: "#333"
    },
    light: {
        bgColor: "#3788d8",
        colorOpacity: "#48a3f8",
        hoverColor: "#48a3f8",
    }
}


const UseThemeContext = ({children})=>{
 return(
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
 )   
}

export  {UseThemeContext, ThemeContext}