import "./Projects.css"

import ProjectCard from "./components/ProjectCard"



export default function Projects() {
    return (
        <main className="projects">
            <h1 className="title__section">Proyectos</h1>
            <div className="projects__wrapper">
                <ProjectCard
                    index="01"
                    title="Paula Perelló Podología"
                    description="Diseño de identidad visual y piezas gráficas para una clínica podológica."
                    projectLink="/project1"
                />
                <ProjectCard
                    index="02"
                    title="The Cookie Jar"
                    description="Diseño de identidad visual y piezas gráficas para una clínica podológica."
                    projectLink="/project2"
                />
                <ProjectCard
                    index="03"
                    title="Taurino Digital Agency"
                    description="Creación de identidad visual y diseño de interfaz en Figma para empresa de servicios digitales."
                    projectLink="/project3"
                />
            </div>
        </main>
    )
}