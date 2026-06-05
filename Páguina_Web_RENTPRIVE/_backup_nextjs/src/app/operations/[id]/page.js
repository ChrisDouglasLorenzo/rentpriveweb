"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { operations } from "@/data/operations";

export default function OperationDetail() {
  const params = useParams();
  const [operation, setOperation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    if (params.id) {
      const op = operations.find((o) => o.id === parseInt(params.id));
      setOperation(op);
      setLoading(false);
    }
  }, [params.id]);

  const handleReserve = () => {
    // Simulation of reservation request
    setReserved(true);
    // Here we would send the "Internal Notice"
    console.log("Aviso interno enviado para operación:", operation.title);
  };

  if (loading) return <div className="container section">Cargando...</div>;
  if (!operation) return <div className="container section">Operación no encontrada</div>;

  return (
    <div className="operation-detail">
      {/* Hero */}
      <div className="op-hero">
        <div className="container op-hero-content">
          <span className="op-status">{operation.status}</span>
          <h1 className="op-title">{operation.title}</h1>
          <p className="op-location">{operation.location}</p>
        </div>
        <div className="op-overlay"></div>
      </div>

      <div className="container section">
        <div className="op-grid">
          {/* Left Column: Details */}
          <div className="op-main">
            <h2 className="section-title">Descripción del Proyecto</h2>
            <p className="op-description">{operation.description}</p>

            {operation.gallery && (
              <div className="op-gallery">
                <h3 className="gallery-title">Galería</h3>
                <div className="gallery-grid">
                  {operation.gallery.map((img, index) => (
                    <div key={index} className="gallery-item">
                      <img src={img} alt={`${operation.title} - ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="op-specs">
              <h3>Características</h3>
              <ul>
                <li><strong>Tipo:</strong> {operation.type}</li>
                <li><strong>Ubicación:</strong> {operation.location}</li>
                <li><strong>Estado:</strong> {operation.status}</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Investment Summary */}
          <div className="op-sidebar">
            <div className="investment-card">
              <h3 className="inv-title">Resumen de Inversión</h3>

              <div className="inv-metrics">
                <div className="inv-metric">
                  <span className="label">Rentabilidad Estimada</span>
                  <span className="value text-gold">{operation.return}</span>
                </div>
                <div className="inv-metric">
                  <span className="label">Plazo</span>
                  <span className="value">{operation.duration}</span>
                </div>
                <div className="inv-metric">
                  <span className="label">Inversión Mínima</span>
                  <span className="value">{operation.minInvestment}</span>
                </div>
                <div className="inv-metric">
                  <span className="label">Objetivo Total</span>
                  <span className="value">{operation.amount}</span>
                </div>
              </div>

              {!reserved ? (
                <button onClick={handleReserve} className="btn btn-primary btn-block">
                  Solicitar Reserva
                </button>
              ) : (
                <div className="reservation-success">
                  <p className="success-title">¡Solicitud Enviada!</p>
                  <p className="success-text">
                    Hemos recibido su interés. Un gestor de Rentprivé contactará con usted en breve para formalizar la operación.
                  </p>
                </div>
              )}

              <p className="disclaimer">
                * La reserva no implica pago inmediato. La operación se cerrará manualmente tras verificación.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .op-hero {
          height: 50vh;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
          background-image: url('${operation.image}');
          background-size: cover;
          background-position: center;
          background-color: #1a1a1a;
        }
        
        .op-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.95));
          z-index: 1;
        }
        
        .op-hero-content {
          position: relative;
          z-index: 2;
        }
        
        .op-status {
          background: var(--color-gold);
          color: var(--color-black);
          padding: 0.5rem 1rem;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.8rem;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .op-title {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }
        
        .op-location {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
        }
        
        .op-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }
        
        .op-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.9);
          margin-bottom: 3rem;
        }
        
        .op-specs ul {
          list-style: none;
          margin-top: 1rem;
        }
        
        .op-specs li {
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .investment-card {
          background: var(--color-black-soft);
          border: 1px solid var(--color-gold);
          padding: 2rem;
          position: sticky;
          top: 100px;
        }
        
        .inv-title {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--color-gold);
        }
        
        .inv-metrics {
          margin-bottom: 2rem;
        }
        
        .inv-metric {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .inv-metric:last-child {
          border-bottom: none;
        }
        
        .label {
          color: rgba(255,255,255,0.6);
        }
        
        .value {
          font-weight: bold;
        }
        
        .btn-block {
          width: 100%;
          text-align: center;
          font-weight: bold;
        }
        
        .reservation-success {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--color-gold);
          padding: 1.5rem;
          text-align: center;
        }
        
        .success-title {
          color: var(--color-gold);
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .success-text {
          font-size: 0.9rem;
        }
        
        .disclaimer {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          margin-top: 1.5rem;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .op-grid {
            grid-template-columns: 1fr;
          }
          
          .op-hero {
            height: 40vh;
          }
          
          .op-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
