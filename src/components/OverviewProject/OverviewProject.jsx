import "./OverviewProject.css";

export default function OverviewProject() {
    return (
        <section className="overview__section">
            <div className="overview__container">
                <picture className="contain__picture">
                    <source srcSet="" type="image/png" />
                    <img
                        className="contain__img"
                        src=""
                        alt="Foto polaroid con la fachada de la clínica de podología"
                    />
                </picture>
            </div>

            <div className="overview__container">
                <div className="content__section content__section--sticker auto-rotate">
                    <img
                        className="contain__img"
                        src=""
                        alt="Círculo con el logo de Paula Perelló Podología"
                    />
                </div>

                <div className="content__section content__section--summary">
                    <div className="summary__container">
                        <div className="summary__content summary__content--name">
                            <p className="h5 uppercase summary__title">Nombre:</p>
                            <p className="h6 summary__text">Paula Perelló Podología</p>
                        </div>

                        <div className="summary__content summary__content--type">
                            <p className="h5 uppercase summary__title">Tipo de proyecto:</p>
                            <p className="h6 summary__text">Branding, diseño gráfico.</p>
                        </div>

                        <div className="summary__content summary__content--duration">
                            <p className="h5 uppercase summary__title">Duración del proyecto:</p>
                            <p className="h6 summary__text">8 semanas</p>
                        </div>

                        <div className="summary__content summary__content--role">
                            <p className="h5 uppercase summary__title">Rol:</p>
                            <p className="h6 summary__text">Diseñadora</p>
                        </div>

                        <div className="summary__content summary__content--tools">
                            <p className="h5 uppercase summary__title">Herramientas:</p>
                            <p className="h6 summary__text">Illustrator, Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}