import "./ProjectsNavigation.css"

import ProjectCard from "@/components/ProjectCard/ProjectCard"

import Project1Webp from "@/assets/projects/project1.webp"
import Project1Jpg from "@/assets/projects/project1.jpg"

export default function ProjectsNavigation () {

    return (
        <section className="projects-nav">
            <div className="projects-nav__list">
                <div className="projects-nav__item">
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
                <div className="projects-nav__item">
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
            </div>
        </section>
    )
}
