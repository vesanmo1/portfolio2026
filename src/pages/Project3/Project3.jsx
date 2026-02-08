import "./Project3.css"

import OverviewProject from "@/components/OverviewProject/OverviewProject"
import ProjectCover from "@/components/ProjectCover/ProjectCover"

import LogoCover1 from "@/assets/project1/logos/logo-dark-background-podiatry.svg"
import Sticker1 from "@/assets/project1/sticker-podiatry.svg"

export default function Project3 () {

    return (
        <main className="project3">
            <ProjectCover
                number="3"
                src={LogoCover1}
                alt="Logo de The Cookie Jar"
            />
            <OverviewProject
                src={Sticker1}
                alt="Círuclo con el logo de Paula Perelló Podología"
                nameValue="Paula Perelló Podología"
                typeValue="Branding, diseño gráfico."
                timeValue="8 semanas"
                roleValue="Diseñadora"
                toolsValue="Illustrator, Photoshop"
            />
        </main>
    )
}