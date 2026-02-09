import "./Projects.css"

import ProjectCard from "@/components/ProjectCard/ProjectCard"

import Project1Webp from "@/assets/projects/project1.webp"
import Project1Jpg from "@/assets/projects/project1.jpg"
import Project2Webp from "@/assets/projects/project2.webp"
import Project2Jpg from "@/assets/projects/project2.jpg"
import Project3Webp from "@/assets/projects/project3.webp"
import Project3Jpg from "@/assets/projects/project3.jpg"



export default function Projects() {
    return (
        <main className="projects">
            <h1 className="title__section">Proyectos</h1>
            <div className="projects__wrapper">
                <div className="project__wrapper">
                    <ProjectCard                    
                        index="01"
                        title="Paula Perelló Podología"
                        description="Diseño de identidad visual y piezas gráficas para una clínica podológica."
                        projectLink="/project1"
                        webpSrc={Project1Webp}        
                        fallbackSrc={Project1Jpg}     
                        alt = "Imagen con el diseño de las tarjetas de visita creadas para el proyecto Paula Perelló Podología"
                    >
                        Ver proyecto
                    </ProjectCard>
                </div>
                <div className="project__wrapper">
                    <ProjectCard
                        index="02"
                        title="The Cookie Jar"
                        description="Definición de la identidad visual, diseño de interfaz en Figma y desarrollo de la web en React, con base de datos y API propia para la gestión de contenidos."
                        projectLink="/project2"
                        webpSrc={Project2Webp}        
                        fallbackSrc={Project2Jpg}     
                        alt = "Imagen con el diseño de las tarjetas de visita creadas para el proyecto Paula Perelló Podología"
                    >
                        Ver proyecto
                    </ProjectCard>
                </div>
                <div className="project__wrapper  project__wrapper--lastest">
                    <ProjectCard
                        index="03"
                        title="Taurino Digital Agency"
                        description="Creación de identidad visual y diseño de interfaz en Figma para empresa de servicios digitales."
                        projectLink="/project3"
                        webpSrc={Project3Webp}        
                        fallbackSrc={Project3Jpg}     
                        alt = "Imagen con el diseño de las tarjetas de visita creadas para el proyecto Paula Perelló Podología"
                    >
                        Ver proyecto
                    </ProjectCard>
                </div>
            </div>
        </main>
    )
}