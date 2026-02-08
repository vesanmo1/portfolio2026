// Suspense permite mostrar un fallback mientras React carga componentes de forma diferida.
import { Suspense } from 'react'
// Routes y Route definen las rutas.
import { Routes, Route } from 'react-router-dom'
// Para reestablecer el scroll al cambiar de ruta
import { ScrollToTop } from './scrollToTop'

import Home from "@/pages/Home/Home"
import Projects from "@/pages/Projects/Projects"
import Project1 from "@/pages/Project1/Project1"
import Project2 from "@/pages/Project2/Project2"
import Project3 from "@/pages/Project3/Project3"

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Cargando…</div>}>
            <ScrollToTop />
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
                <Route path="/project3" element={<Project3 />} />
            </Routes>
        </Suspense>
    )
}
