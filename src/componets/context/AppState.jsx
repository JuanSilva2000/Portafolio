import React ,{useState} from 'react'
import AppContext from './AppContext'

export const AppState = ({children}) => {
    const [selectedTheme, setSelectedTheme] = useState({ name: "blood", colors: ["#232222", "#E4E4E4","#FF467E"] })
  
  
    return (
        <AppContext.Provider value={{
            selectedTheme,
            setSelectedTheme
        }}>
            {children}
        </AppContext.Provider>
  )
}