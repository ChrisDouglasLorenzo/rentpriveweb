import Link from "next/link";
import { operations } from "@/data/operations";

export default function Operations() {
  return (
    <div className="operations-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Oportunidades de Inversión</h1>
          <p className="page-subtitle">
            Descubra nuestra selección exclusiva de activos inmobiliarios y financieros.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="operations-grid">
          {operations.map((op) => (
            <div key={op.id} className="operation-card">
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
                  <div className="metric">
                    <span className="metric-label">Objetivo</span>
                    <span className="metric-value">{op.amount}</span>
                  </div>
                </div>

                <Link href={`/operations/${op.id}`} className="btn btn-card">
                  Ver Ficha Completa
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
