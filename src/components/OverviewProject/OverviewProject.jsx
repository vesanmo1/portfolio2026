import "./OverviewProject.css";

export default function OverviewProject (props) {

    const { src, alt } = props

    return (
        <section className="overview">
            <div className="overview__container">
                <div className="overview__logo  auto-rotate">
                    <img
                    className="overview__logo-image"
                    src={src}
                    alt={alt}
                    />
                </div>

                <div className="overview__details">
                    <div className="overview__list">
                        <div className="overview__item  overview__item--name">
                            <p className="overview__label">Nombre:</p>
                            <p className="overview__value">Paula Perelló Podología</p>
                        </div>

                        <div className="overview__item  overview__item--type">
                            <p className="overview__label">Tipo de proyecto:</p>
                            <p className="overview__value">Branding, diseño gráfico.</p>
                        </div>

                        <div className="overview__item  overview__item--duration">
                            <p className="overview__label">Duración del proyecto:</p>
                            <p className="overview__value">8 semanas</p>
                        </div>

                        <div className="overview__item  overview__item--role">
                            <p className="overview__label">Rol:</p>
                            <p className="overview__value">Diseñadora</p>
                        </div>

                        <div className="overview__item  overview__item--tools">
                            <p className="overview__label">Herramientas:</p>
                            <p className="overview__value">Illustrator, Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}