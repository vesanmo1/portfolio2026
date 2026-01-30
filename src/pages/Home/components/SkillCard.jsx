import "./SkillCard.css"

export default function SkillCard(props) {

    const { index, title, description, className = "" } = props

    return (
        <article className="skill-card">
            <div className={`skill-card__wrapper ${className}`}>
                <span className="skill-card__index" aria-hidden="true">{index}</span>

                <div className="skill-card__content">
                    <h3 className="skill-card__title">{title}</h3>
                    <p className="skill-card__description">{description}</p>
                </div>
            </div>
        </article>
    )
}