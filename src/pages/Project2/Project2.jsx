import "./Project2.css"

import OverviewProject from "@/components/OverviewProject/OverviewProject"
import ProjectCover from "@/components/ProjectCover/ProjectCover"

import LogoCover2 from "@/assets/project2/logos/full-logo-yellow.svg"
import Sticker2 from "@/assets/project2/sticker-cookies.svg"

export default function Project2 () {

    return (
        <main className="project2">
            <ProjectCover
                number="2"
                src={LogoCover2}
                alt="Logo de The Cookie Jar"
            />
            <OverviewProject
                src={Sticker2}
                alt="Círuclo con el logo de The Cookie Jar"
                nameValue="The Cookie Jar"
                typeValue="Producto digital, Full-stack, Branding."
                timeValue="11 semanas"
                roleValue="Desarrolladora full-stack y diseñadora de producto"
                toolsValue="React, Node.js, Express.js, MongoDB, Vercel, Figma, Illustrator"
            />
        </main>
    )
}