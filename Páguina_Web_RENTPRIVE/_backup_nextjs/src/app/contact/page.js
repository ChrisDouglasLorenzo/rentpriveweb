"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contacto / Acceso Club</h1>
          <p className="page-subtitle">
            Solicite acceso a nuestro Club Privado o envíenos sus consultas.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Información</h2>
            <p>
              Para garantizar la exclusividad y calidad de nuestro servicio,
              el acceso a Rentprivé es limitado.
            </p>

            <div className="info-item">
              <h3>Email</h3>
              <p>info@rentprive.com</p>
            </div>

            <div className="info-item">
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Describa brevemente su perfil y el tipo de oportunidades que busca</label>
                  <textarea id="message" rows="4"></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-block">
                  Agenda tu llamada
                </button>
              </form>
            ) : (
              <div className="success-message">
                <h3 className="text-gold">¡Solicitud Enviada!</h3>
                <p>
                  Gracias por su interés en Rentprivé. Nuestro equipo revisará su perfil
                  y se pondrá en contacto con usted para agendar la llamada.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-header {
          background-color: var(--color-black-soft);
          padding: 6rem 0 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .page-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .page-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: 1.1rem;
          max-width: 600px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-info p {
          margin-bottom: 2rem;
          color: rgba(255,255,255,0.8);
        }
        
        .info-item h3 {
          font-size: 1.2rem;
          color: var(--color-gold);
          margin-bottom: 0.5rem;
        }
        
        .contact-form-wrapper {
          background: #000000;
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }
        
        input, textarea {
          width: 100%;
          padding: 12px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-bottom-color: var(--color-gold);
        }
        
        .btn-gold {
          background-color: var(--color-gold);
          color: #000;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-top: 1rem;
        }
        
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }
        
        .btn-block {
          width: 100%;
        }
        
        .success-message {
          text-align: center;
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .contact-form-wrapper {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

