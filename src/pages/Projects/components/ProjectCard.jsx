import "./ProjectCard.css"

import Link from "@/components/Actions/Link"

export default function ProjectCard(props) {

    const { 
        index,
        title, 
        description, 
        projectLink, 
        className = "",

        // props de imagen
        webpSrc,           // principal (webp)
        fallbackSrc,       // reserva (jpg/png)
        alt = "",
    } = props

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
                        to={projectLink}
                    >
                        Ver proyecto
                    </Link>
                </div>
            </div>
            <div className="project-card__wrapper  project-card__wrapper--media">
                <picture className="project-card__image">
                    {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
                    <img src={fallbackSrc || webpSrc} alt={alt} />
                </picture>
            </div>
        </article>
    )
}