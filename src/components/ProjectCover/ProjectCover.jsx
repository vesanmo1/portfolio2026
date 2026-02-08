import "./ProjectCover.css"

export default function ProjectCover (props) {

    const { number, src, alt } = props

    return (
        <div className="project-cover">
            <div className={`project-cover__wrapper project-cover__wrapper--${number}`}>
                <img className="project-cover__image" src={src} alt={alt} />
            </div>
        </div>
    )
}