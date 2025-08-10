import React ,{useState} from 'react'
import AppContext from './AppContext'

export const AppState = ({children}) => {
    const [selectedTheme, setSelectedTheme] = useState({ name: "light green", colors: ["#E4E4E4","#2C2D3C", "#37b482"] })
  
  
    return (
        <AppContext.Provider value={{
            selectedTheme,
            setSelectedTheme
        }}>
            {children}
        </AppContext.Provider>
  )
}