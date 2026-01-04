import Link from "next/link";

export default function About() {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Sobre Rentprivé</h1>
                    <p className="page-subtitle">
                        Redefiniendo la inversión inmobiliaria a través de la exclusividad y la confianza.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="content-grid">
                    <div className="text-block">
                        <h2 className="section-title">Nuestra Misión</h2>
                        <p>
                            Rentprivé nace con el objetivo de democratizar el acceso a las grandes oportunidades
                            de inversión inmobiliaria, reservadas tradicionalmente a grandes fondos y capitales.
                        </p>
                        <p>
                            Actuamos como un <strong>Club Privado</strong> donde la confianza y la transparencia
                            son los pilares fundamentales. Seleccionamos rigurosamente cada operación para ofrecer
                            a nuestros socios rentabilidades atractivas con riesgos controlados.
                        </p>
                    </div>
                    <div className="image-block">
                        {/* Placeholder */}
                        <div className="image-placeholder"></div>
                    </div>
                </div>
            </div>

            <div className="section bg-darker">
                <div className="container">
                    <h2 className="section-title text-center">Equipo Directivo</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image"></div>
                            <h3 className="member-name">José Antonio</h3>
                            <p className="member-role">Fundador & CEO</p>
                        </div>
                        <div className="team-member">
                            <div className="member-image"></div>
                            <h3 className="member-name">Nacho</h3>
                            <p className="member-role">Fundador & Director de Inversiones</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section text-center">
                <h2 className="section-title">¿Por qué Rentprivé?</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h3 className="value-title">Exclusividad</h3>
                        <p>Acceso a operaciones off-market y pre-comercialización.</p>
                    </div>
                    <div className="value-item">
                        <h3 className="value-title">Seguridad</h3>
                        <p>Análisis exhaustivo y due diligence de cada proyecto.</p>
                    </div>
                    <div className="value-item">
                        <h3 className="value-title">Gestión Integral</h3>
                        <p>Nos ocupamos de todo el proceso, desde la captación hasta la desinversión.</p>
                    </div>
                </div>

                <div className="cta-box">
                    <p>Únase a nuestro club de inversores hoy mismo.</p>
                    <Link href="/contact" className="btn btn-primary">Solicitar Acceso</Link>
                </div>
            </div>


        </div>
    );
}
