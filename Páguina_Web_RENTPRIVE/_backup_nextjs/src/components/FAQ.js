"use client";

import { useState } from "react";

const faqs = [
    {
        question: "¿Quiénes somos?",
        answer: "RENTPRIVE es un club privado de inversión especializado en identificar, analizar y presentar oportunidades inmobiliarias exclusivas. Accedemos a operaciones procedentes de numerosos despachos legales, analistas y fondos privados, lo que nos permite seleccionar solo los activos más sólidos y con mayor potencial."
    },
    {
        question: "¿Cómo nos comprometemos?",
        answer: "Nuestro compromiso es ofrecer transparencia, seguridad y un análisis riguroso en cada operación, para que nuestros inversores tomen decisiones informadas y con total confianza."
    },
    {
        question: "¿Cuánto dinero necesito para empezar a invertir?",
        answer: "El importe mínimo depende de cada operación. El equipo le informará de las oportunidades adecuadas una vez que su perfil esté validado."
    },
    {
        question: "¿Qué tipo de oportunidades ofrecemos?",
        answer: "Principalmente deuda hipotecaria en ejecución, activos judiciales, cesiones de remate y activos adjudicados fuera de mercado."
    },
    {
        question: "¿RENTPRIVE está regulado por la CNMV?",
        answer: "No. RENTPRIVE no es un producto financiero ni una plataforma de captación masiva, sino una plataforma privada que estructura operaciones caso por caso."
    },
    {
        question: "¿Cómo sé que la operación es segura?",
        answer: "RENTPRIVE analiza, verifica y estructura cada operación con abogados y notarios antes de presentarla. Aun así, en cualquier inversión existe riesgo."
    },
    {
        question: "¿Puedo perder dinero en estas operaciones?",
        answer: "Sí, toda operación conlleva riesgo (jurídico, de plazo, de ocupación). Por eso filtramos operaciones, validamos documentación y acompañamos cada paso para mayor claridad."
    },
    {
        question: "¿Cómo puedo empezar?",
        answer: "Realice su registro básico. El equipo le contactará para validar su perfil y presentarle las oportunidades adecuadas disponibles."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <div className="faq-grid">
                    <div className="faq-header">
                        <h2 className="section-title">PREGUNTAS <br /> FRECUENTES</h2>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
                                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                    <span className="faq-icon">{openIndex === index ? "✕" : "+"}</span>
                                </button>
                                <div className="faq-answer" style={{ maxHeight: openIndex === index ? "200px" : "0" }}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
