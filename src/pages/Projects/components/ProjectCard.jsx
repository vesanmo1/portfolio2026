import "./ProjectCard.css"

import Link from "@/components/Actions/Link"

import Project1PNG from "@/assets/projects/project1.webp"

export default function ProjectCard(props) {

    const { index, title, description, className = "" } = props

    return (
        <article className={`project-card  ${className}`}>
            <div className="project-card__wrapper  project-card__wrapper--content">
                <div className="project-card__index-wrap">
                    <span className="project-card__index">Caso de estudio {index}</span>
                </div>
                <div className="project-card__body">
                    <h2 className="project-card__title">{title}</h2>
                    <h3 className="project-card__description">{description}</h3>
                    <Link
                        className="cta-projects__btn  pill-btn  fit-btn  solid-black"
                        to={"/project1"}
                    >
                        Ver proyecto
                    </Link>
                </div>
            </div>
            <div className="project-card__wrapper  project-card__wrapper--media">
                <img className="project-card__image" src={Project1PNG} alt="" />
            </div>
        </article>
    )
}