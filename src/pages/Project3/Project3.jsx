import "./Project3.css"

import OverviewProject from "@/components/OverviewProject/OverviewProject"
import ProjectCover from "@/components/ProjectCover/ProjectCover"

import LogoCover3 from "@/assets/project3/logos/logo-m-black-background.svg"
import Sticker3 from "@/assets/project3/sticker-taurino.svg"

export default function Project3 () {

    return (
        <main className="project3">
            <ProjectCover
                number="3"
                src={LogoCover3}
                alt="Logo de Taurino Digital Agency"
            />
            <OverviewProject
                src={Sticker3}
                alt="Círuclo con el logo de Taurino Digital Agency"
                nameValue="Taurino Digital Agency"
                typeValue="Branding y diseño de producto digital"
                timeValue="8 semanas"
                roleValue="Product designer (branding & UX/UI)"
                toolsValue="Figma, Illustrator, Photoshop"
            />
        </main>
    )
}