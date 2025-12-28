import Link from "next/link";

import { operations } from "@/data/operations";
import FAQ from "@/components/FAQ";
import { FadeIn } from "@/components/ScrollAnimation";
import { Gem, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  const featuredOperations = operations.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <FadeIn delay={200}>
            <h1 className="hero-title">
              Inversión Inmobiliaria <span className="text-gold">Exclusiva</span>
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="hero-subtitle">
              Acceso privilegiado a oportunidades de alto potencial.
              Rentabilidad, seguridad y gestión profesional.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="hero-actions">
              <Link href="/operations" className="btn btn-primary">
                Ver Oportunidades
              </Link>
              <Link href="/about" className="btn btn-outline">
                Conocer el Club
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section (Qué Ofrecemos) */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-lg">
              <h2 className="section-title">Qué Ofrecemos</h2>
              <p className="section-subtitle">Soluciones integrales para el inversor exigente</p>
            </div>
          </FadeIn>
          <div className="services-grid">
            <FadeIn delay={200}>
              <div className="service-card">
                <div className="service-icon">
                  <Gem size={48} strokeWidth={1.5} />
                </div>
                <h3>Cristalera Inmobiliaria</h3>
                <p>Acceso transparente a un catálogo exclusivo de activos inmobiliarios seleccionados rigurosamente.</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="service-card">
                <div className="service-icon">
                  <TrendingUp size={48} strokeWidth={1.5} />
                </div>
                <h3>Alta Rentabilidad</h3>
                <p>Oportunidades diseñadas para maximizar el retorno de inversión con riesgos controlados.</p>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="service-card">
                <div className="service-icon">
                  <Shield size={48} strokeWidth={1.5} />
                </div>
                <h3>Gestión Integral</h3>
                <p>Nos encargamos de todo el proceso, desde la captación hasta la desinversión y reparto de beneficios.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Rentprivé Section */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <FadeIn className="why-content">
              <h2 className="section-title">Por qué <span className="text-gold">Rentprivé</span></h2>
              <p className="mb-md">
                En un mercado saturado, Rentprivé se distingue por la <strong>exclusividad</strong> y la <strong>confianza</strong>. No somos un marketplace masivo; somos un club privado donde cada operación tiene nombre y apellidos.
              </p>
              <div className="why-features">
                <div className="why-feature-item">
                  <div className="feature-icon">
                    <Shield size={24} />
                  </div>
                  <div className="feature-text">
                    <strong>Sin Intermediarios Externos</strong>
                    <p>Trato directo y transparente.</p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="feature-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="feature-text">
                    <strong>Capital Propio</strong>
                    <p>Co-invertimos en las operaciones que ofrecemos.</p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="feature-icon">
                    <Shield size={24} />
                  </div>
                  <div className="feature-text">
                    <strong>Seguridad Jurídica</strong>
                    <p>Estructuras legales sólidas para proteger su patrimonio.</p>
                  </div>
                </div>
                <div className="why-feature-item">
                  <div className="feature-icon">
                    <Gem size={24} />
                  </div>
                  <div className="feature-text">
                    <strong>Network Selecto</strong>
                    <p>Acceso a una red de inversores de alto nivel.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300} className="why-image">
              <div className="image-placeholder-logo">
                <span className="big-logo">RP</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section (Equipo Fundador) */}
      <section className="section team-section">
        <div className="container text-center">
          <FadeIn>
            <h2 className="section-title">Equipo Fundador</h2>
            <p className="section-subtitle mb-lg">La experiencia y visión detrás de Rentprivé</p>
          </FadeIn>

          <div className="team-grid-home">
            <FadeIn delay={200}>
              <div className="team-member-home">
                <div className="member-photo"></div>
                <h3>José Antonio</h3>
                <p className="member-role text-gold">Co-Founder & CEO</p>
                <p className="member-desc">Experto en estructuración de activos y estrategia financiera.</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="team-member-home">
                <div className="member-photo"></div>
                <h3>Nacho</h3>
                <p className="member-role text-gold">Co-Founder & COO</p>
                <p className="member-desc">Especialista en gestión operativa y desarrollo de negocio.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Operations */}
      <section className="section operations-section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2 className="section-title">Oportunidades Destacadas</h2>
              <Link href="/operations" className="view-all">Ver todas &rarr;</Link>
            </div>
          </FadeIn>

          <div className="operations-grid">
            {featuredOperations.map((op, index) => (
              <FadeIn key={op.id} delay={index * 200}>
                <div className="operation-card">
                  <div className="card-image" style={{ backgroundImage: `url('${op.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="card-status">{op.status}</div>
                  </div>
                  <div className="card-content">
                    <span className="card-type">{op.type}</span>
                    <h3 className="card-title">{op.title}</h3>
                    <p className="card-location">{op.location}</p>

                    <div className="card-metrics">
                      <div className="metric">
                        <span className="metric-label">Rentabilidad</span>
                        <span className="metric-value text-gold">{op.return}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Plazo</span>
                        <span className="metric-value">{op.duration}</span>
                      </div>
                    </div>

                    <Link href={`/operations/${op.id}`} className="btn btn-card">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FadeIn>
        <FAQ />
      </FadeIn>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <FadeIn>
            <h2 className="cta-title">Únase al Club Privado</h2>
            <p className="cta-text">
              Forme parte de una comunidad exclusiva de inversores y acceda a las mejores oportunidades del mercado.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Solicitar Acceso
            </Link>
          </FadeIn>
        </div>
      </section>


    </div>
  );
}
