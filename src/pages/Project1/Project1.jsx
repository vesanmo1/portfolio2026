import "./Project1.css"

import OverviewProject from "@/components/OverviewProject/OverviewProject"
import ProjectCover from "@/components/ProjectCover/ProjectCover"

export default function Project1 () {

    return (
        <main className="project1">
            <ProjectCover/>
            <OverviewProject/>
        </main>
    )
}