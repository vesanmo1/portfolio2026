import "./Home.css"

import folderDesktopWEBP from "@/assets/home/folderDesktop.webp"
import folderDesktopPNG from "@/assets/home/folderDesktop.png"
import folderMobileWEBP from "@/assets/home/folderMobile.webp"
import folderMobilePNG from "@/assets/home/folderMobile.png"

import titleDesktop from "@/assets/home/title-desktop.svg"
import titleMobile from "@/assets/home/title-mobile.svg"

import SkillCard from "./components/SkillCard"
import Link from "@/components/Actions/Link"


export default function Home() {
    return (
        <main className="home">
            <header className="cover">
                <div className="cover__wrapper">
                    <ResponsiveSvg
                        alt="Título: portfolio creado por Verónica Sánchez"
                        desktopSrc={titleDesktop}
                        mobileSrc={titleMobile}
                    />
                    <ResponsivePicture
                        desktopWebp={folderDesktopWEBP}
                        desktopPng={folderDesktopPNG}
                        mobileWebp={folderMobileWEBP}
                        mobilePng={folderMobilePNG}
                        alt="Imagen: carpeta con fotos de algunos de mis trabajos"
                    />             
                </div>
            </header>
            
            <section className="intro">
                <h1 className="intro__text">
                    👋¡Hola! Soy Vero, diseñadora y frontend developer. 
                    Trabajo creando interfaces claras y funcionales, 
                    prestando atención tanto al diseño como a su implementación. 
                    Me interesa el equilibrio entre estética, 
                    usabilidad y una ejecución sólida.
                </h1>
            </section>

            <section className="skills">
                <div className="skills__intro">
                    <h2 className="title__section">Qué aporto</h2>
                    <p className="skills__subtitle">Diseño y desarrollo en un mismo perfil</p>
                </div>
                <div className="skills__cards">
                    <SkillCard
                        index="01"
                        title="Branding"
                        description="Ayudo a definir marcas creando identidades visuales sólidas, reconocibles y bien estructuradas."
                    />
                    <SkillCard
                        index="02"
                        title="Diseño UX/UI"
                        description="Diseño productos digitales centrados en la usabilidad, con sistemas de diseño que permiten escalar."
                    />
                    <SkillCard
                        index="03"
                        title="Frontend"
                        description="Desarrollo interfaces con una base clara, priorizando el orden y la mantenibilidad del código."
                    />
                    <SkillCard
                        className="skill-card--lastest"
                        index="04"
                        title="Backend"
                        description="He trabajado con APIs simples, comprendiendo su estructura y la comunicación con la base de datos."
                    />
                </div>
            </section>

            <section className="cta-projects">
                <div className="cta-projects__wrapper">
                    <h4 className="cta-projects__text">Algunos ejemplos de cómo aplico estas habilidades a proyectos reales.</h4>
                    <Link
                        className="cta-projects__btn  pill-btn  fit-btn  solid-white"
                        to={"/projects"}
                    >
                        Ver proyectos
                    </Link>
                </div>
            </section>
        </main>
    )
}

function ResponsivePicture(props) {

    const { desktopWebp, desktopPng, mobileWebp, mobilePng, alt = "" } = props

    return (
        <picture className="cover__title-img">
            <source type="image/webp" media="(min-width: 1000px)" srcSet={desktopWebp} />
            <source type="image/png"  media="(min-width: 1000px)" srcSet={desktopPng} />

            <source type="image/webp" media="(max-width: 999px)" srcSet={mobileWebp} />
            <source type="image/png"  media="(max-width: 999px)" srcSet={mobilePng} />

            <img src={mobilePng} alt={alt} />
        </picture>
    );
}

function ResponsiveSvg(props) {

    const { desktopSrc, mobileSrc, alt = "" } = props

    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={desktopSrc} />
            <img src={mobileSrc} alt={alt} />
        </picture>
    );
}