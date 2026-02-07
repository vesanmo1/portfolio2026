// ============================================================
// APP (ROOT COMPONENT)
//
// Componente raíz de la aplicación.
// Se encarga de:
// 1) Cargar estilos globales (CSS general de toda la web)
// 2) Activar el enrutado (React Router) para poder tener varias páginas
// 3) Renderizar el árbol de rutas (AppRoutes), que decide qué página mostrar
//    según la URL (/, /projects, /projects/:slug, /about, etc.)
// ============================================================

// Estilos globales de la aplicación.
import "./styles/Globals.css"

// HashRouter: evita 404 al recargar rutas en GitHub Pages (hosting estático sin rewrites).
// `basename` usa el `base` configurado en Vite (/, /<repo>/, etc.).
import { HashRouter } from "react-router-dom"

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AppRoutes from "@/router/AppRoutes";


// ============================================================
// App
//
// Este componente es el "contenedor principal" de la web.
// Aquí envolvemos la app con HashRouter para activar las rutas.
// Dentro, AppRoutes decide qué página se muestra.
// ============================================================
export default function App() {
    return (
        <HashRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
                <AppRoutes />
            <Footer />
        </HashRouter>
    )
}
