// Initialize Lucide icons
lucide.createIcons();

// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Form Handling (for Contact Page)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            // Hide form and show success message
            const formWrapper = document.querySelector('.contact-form-wrapper');
            formWrapper.innerHTML = `
                <div class="success-message fade-in visible">
                    <h3 class="text-gold" style="font-size: 2rem; margin-bottom: 1rem;">¡Solicitud Enviada!</h3>
                    <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem;">
                        Gracias por su interés en Rentprivé. Nuestro equipo revisará su perfil
                        y se pondrá en contacto con usted para agendar la llamada.
                    </p>
                </div>
            `;
        }, 1500);
    });
}

// Operations Data
const operationsData = {
    'lote-17': {
        title: "LOTE 17 CHALETS AL 70%",
        location: "Alcoy (ALICANTE)",
        images: [
            "assets/images/lote17_1.png",
            "assets/images/lote17_2.png", // Assuming these exist or using placeholders if not, will use main for now if specific ones aren't there. I'll use the main one repeated if others don't exist, but I recall seeing them in the original data.js view.
            "assets/images/lote17_3.png"
        ],
        return: "Alta Plusvalía",
        duration: "18 meses",
        amount: "521.900€",
        description: `
            <h3>Resumen</h3>
            <p><strong>Superficie:</strong> 349 m2</p>
            <p>Adquisición de un lote indivisible de 17 chalets adosados con piscina comunitaria, con la obra certificada al 70% de terminación.</p>
            <p><strong>Inversión Unitario:</strong> El precio propuesto por casa se imputa en solo 30.700 €.</p>
            <p><strong>Salida Estimada:</strong> Viviendas terminadas de la misma tipología se venden entre 200.000 € y 220.000 €.</p>
        `
    },
    'parking-romualdo': {
        title: "PARKING ROMUALDO",
        location: "C/ San Romualdo, 26, MADRID",
        images: [
            "assets/images/romualdo_lobby.png",
            "assets/images/romualdo_lobby.png",
            "assets/images/romualdo_lobby.png"
        ],
        return: "Alta Rentabilidad",
        duration: "Indefinido",
        amount: "600.000€",
        description: `
            <h3>Resumen</h3>
            <p><strong>Superficie:</strong> 4.792 m2</p>
            <p>Aparcamiento en Madrid capital con una superficie de 5.456 m2 construidos - 4.792,31 m2 útiles.</p>
            <p>Comprende 165 plazas de garaje en la octava planta de un edificio de uso empresarial.</p>
            <p>Situado en poligono industrial y de oficinas.</p>
            <p>165 plazas (3.636 €/plaza).</p>
        `
    },
    'casa-playa': {
        title: "CASA EN PRIMERA LÍNEA DE PLAYA",
        location: "CL CENACHEROS 93, 29017 MÁLAGA",
        images: [
            "assets/images/cenacheros_facade.jpg",
            "assets/images/cenacheros_facade.jpg",
            "assets/images/cenacheros_facade.jpg"
        ],
        return: "225,69% Neto",
        duration: "8-12 meses",
        amount: "122.817,49 €",
        description: `
            <h3>Resumen</h3>
            <p><strong>Superficie:</strong> 78 m2</p>
            <p>Chalet en la Calle Cenacheros 93, Málaga, en la codiciada Playa de las Acacias. Activo residencial con alto potencial de revalorización.</p>
            <h3>Métricas de Inversión</h3>
            <p><strong>Inversión Requerida:</strong> 122.817,49 €.</p>
            <p><strong>Rentabilidad Estimada:</strong> 225,69% Neto.</p>
            <p><strong>Fase Procesal:</strong> Crédito Hipotecario en CONVOCATORIA DE SUBASTA.</p>
            <p><strong>Plazo Estimado:</strong> 8-12 meses.</p>
        `
    },
    'villas-golf': {
        title: "ADOSADO EN VILLAS DEL GOLF",
        location: "CL E-1 CORNISA DEL SOL, VILLAS DEL GOLF, MANILVA (MÁLAGA)",
        images: [
            "assets/images/villas_golf_main.jpg",
            "assets/images/villas_golf_aerial.jpg",
            "assets/images/villas_golf_map.jpg"
        ],
        return: "65,37% Neto",
        duration: "4-6 meses",
        amount: "158.317,47 €",
        description: `
            <h3>Resumen</h3>
            <p><strong>Superficie:</strong> 136 m2</p>
            <p>Ubicación Premium y Activo: Adosado de 136 m2 útiles situado en la prestigiosa urbanización Villas del Golf, Manilva (Málaga). La urbanización es privada, cuenta con piscinas y campo de golf.</p>
            <h3>Métricas de Inversión</h3>
            <p><strong>Inversión Requerida:</strong> 158.317,47 €.</p>
            <p><strong>Rentabilidad Estimada:</strong> 65,37% Neto.</p>
            <p><strong>Plazo Estimado:</strong> 4-6 meses.</p>
            <h3>Riesgo y Fase Procesal</h3>
            <p>El activo se encuentra en CONVOCATORIA DE SUBASTA. El deudor es extranjero y el inmueble no constituye vivienda habitual, lo que agiliza el proceso de toma de posesión y minimiza riesgos de vulnerabilidad.</p>
        `
    },
    'chalet-piscina': {
        title: "CHALET CON PISCINA",
        location: "CL LAGO MICHIGAN 2, PARLA (MADRID)",
        images: [
            "assets/images/chalet_piscina_facade2.png",
            "assets/images/chalet_piscina_facade1.png",
            "assets/images/chalet_piscina_map.png"
        ],
        return: "Consultar",
        duration: "Consultar",
        amount: "334.394€",
        description: `
            <h3>Resumen</h3>
            <p><strong>Superficie:</strong> 396 m2 construidos</p>
            <p>Oportunidad de Cesión de Remate sobre un chalet unifamiliar con piscina en Valdemoro, Madrid. El inmueble, construido en 2008, tiene una superficie construida de 396 m2 y un valor de mercado estimado de 574.000 €.</p>
            <p>La subasta en el BOE ya ha sido celebrada y la operación se encuentra pendiente de la cesión del derecho de adjudicación.</p>
            <p>Esto representa una operación rápida y con una situación jurídica muy clara, de alto interés para inversores.</p>
        `
    },
};

// Modal Logic
const modal = document.getElementById('operationModal');
if (modal) {
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    window.openModal = (operationId) => {
        const data = operationsData[operationId];
        if (!data) {
            alert('Detalles no disponibles para esta operación.');
            return;
        }

        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalLocation').innerText = data.location;
        document.getElementById('modalReturn').innerText = data.return;
        document.getElementById('modalDuration').innerText = data.duration;
        document.getElementById('modalAmount').innerText = data.amount;
        document.getElementById('modalDescription').innerHTML = data.description;

        document.getElementById('modalMainImg').src = data.images[0];
        document.getElementById('modalSideImg1').src = data.images[1] || data.images[0];
        document.getElementById('modalSideImg2').src = data.images[2] || data.images[0];

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
}
