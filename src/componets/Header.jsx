import React, { useState,useContext } from 'react'
import AppContext from './context/AppContext'
// import chroma from 'chroma-js';
import '../css/Header.css'

const themes = [
    { name: "blood", colors: ["#232222", "#E4E4E4", "#FF467E",] },
    { name: "dark modern", colors: ["#1E1E2E", "#F8F8F2", "#FF79C6"] },
    { name: "vibrant cool", colors: ["#E4E4E4","#2C2D3C", "#37b482"] },
    { name: "professional clean", colors: ["#282C34", "#ABB2BF", "#61AFEF"] },
    { name: "dark & bold", colors: ["#1B1B1B", "#F5F5F5", "#FF5555"] },
    { name: "milkshake", colors: ["#FCE0C0", "#3B2236", "#BD5620"] },
]


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const {selectedTheme, setSelectedTheme} = useContext(AppContext)

    const toggleMenu = () => setIsOpen(!isOpen)

    const getTheme = (theme) => {
        setSelectedTheme(theme)
        setIsOpen(false)
    }

    return (
        <div className="theme-picker" style={{background: selectedTheme.colors[0]}}>
            {/* Botón para abrir/mostrar el menú */}
            <button className="theme-btn" onClick={toggleMenu}>
                {selectedTheme.name}
                <div className="color-preview">
                    {selectedTheme.colors.map((color, index) => (
                        <span key={index} style={{ backgroundColor: color }}></span>
                    ))}
                </div>
            </button>

            {/* Dropdown desplegable */}
            {isOpen && (
                <div className="dropdown">
                    {themes.map((theme) => (
                        <div
                            key={theme.name}
                            className="dropdown-item"
                            onClick={() => getTheme(theme)}
                        >
                            {theme.name}
                            <div className="color-preview">
                                {theme.colors.map((color, index) => (
                                    <span key={index} style={{ backgroundColor: color }}></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
