// Importación de los estilos específicos de la barra de navegación
import "./Navbar.css"

// NavLink: enlaces internos sin recargar la página (React Router)
import { NavLink } from "react-router-dom"

import  {IconBurgerMenu}  from "@/components/icons/IconBurgerMenu"
import  {IconHome}  from "@/components/icons/IconHome"
import  {IconFolderOpen}  from "@/components/icons/IconFolderOpen"
import  {IconContact}  from "@/components/icons/IconContact"

import { useState } from "react"

export default function Navbar() {

    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <nav className="nav-menu" aria-label="Navegación principal">
            <button 
                className="nav-menu__button"
                type="button" 
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={ () => setmenuOpen(prev => !prev)}
            >
                <IconBurgerMenu/>
            </button>
            <ul className={`nav-menu__list  ${menuOpen ? "active" : ""}`}>
                <li className="nav-menu__item">
                    <NavLink 
                        className="nav-menu__link"
                        to={'/'}
                    >
                        <IconHome/>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink 
                        className="nav-menu__link"
                        to={'/projects'}
                    >
                        <IconFolderOpen/>
                        <span>Work</span>
                    </NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink 
                        className="nav-menu__link"
                        to={'/'}
                    >
                        <IconContact/>
                        <span>Ping</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}