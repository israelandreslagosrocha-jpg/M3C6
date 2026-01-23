

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       EFECTOS DE TARJETAS
    =============================== */

    const cards = document.querySelectorAll('.card');
    
    // Efecto hover en tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,.05)';
        });
    });

    // Efecto de aparición en scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // Efecto de ondulación en botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* ===============================
       SLIDER OPINIONES
    =============================== */

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        // Asegurar que el índice está dentro del rango
        currentSlide = (index + slides.length) % slides.length;
        
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    // Controles de botones
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            showSlide(currentSlide - 1);
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            showSlide(currentSlide + 1);
            startAutoPlay();
        });
    }

    // Controles de dots
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearInterval(autoPlayInterval);
            const index = parseInt(dot.dataset.slide);
            showSlide(index);
            startAutoPlay();
        });
    });

    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    startAutoPlay();

    /* ===============================
       RESERVAS
    =============================== */

    // Almacenar reservas en localStorage
    let reservationData = JSON.parse(localStorage.getItem('reservations')) || [];

    window.addToReservation = function() {
        const day = document.getElementById('daySelect').value;
        const branch = document.getElementById('branchSelect').value;
        const time = document.getElementById('timeSelect').value;
        const products = Array.from(document.getElementById('productsSelect').selectedOptions).map(opt => opt.value);
        const name = document.getElementById('nameInput').value;
        const contact = document.getElementById('contactInput').value;

        if (!day || !branch || !time || products.length === 0 || !name || !contact) {
            alert('Por favor completa todos los campos');
            return;
        }

        const reservation = {
            day,
            branch,
            time,
            products,
            name,
            contact,
            date: new Date().toLocaleString()
        };

        reservationData.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservationData));
        
        updateReservationSummary();
        
        // Limpiar campos
        document.getElementById('productsSelect').value = '';
        alert('Producto agregado a la reserva');
    };

    window.updateReservationSummary = function() {
        const summaryDiv = document.getElementById('reservationSummary');
        
        if (reservationData.length === 0) {
            summaryDiv.innerHTML = '<p style="text-align: center; color: #999;">Los productos aparecerán aquí</p>';
            return;
        }

        let html = '';
        reservationData.forEach((res, index) => {
            html += `
                <div class="summary-item">
                    <h4>Reserva #${index + 1}</h4>
                    <p><strong>Nombre:</strong> ${res.name}</p>
                    <p><strong>Día:</strong> ${res.day} a las ${res.time}</p>
                    <p><strong>Sucursal:</strong> ${res.branch}</p>
                    <p><strong>Productos:</strong> ${res.products.join(', ')}</p>
                    <p><strong>Contacto:</strong> ${res.contact}</p>
                    <p style="color: #999; font-size: 0.8rem;">Agregado: ${res.date}</p>
                    <button onclick="removeReservation(${index})" style="background: #ff6b6b; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; margin-top: 0.5rem;">Eliminar</button>
                </div>
            `;
        });
        summaryDiv.innerHTML = html;
    };

    window.removeReservation = function(index) {
        reservationData.splice(index, 1);
        localStorage.setItem('reservations', JSON.stringify(reservationData));
        updateReservationSummary();
    };

    window.clearReservation = function() {
        if (confirm('¿Deseas limpiar todas las reservas?')) {
            reservationData = [];
            localStorage.removeItem('reservations');
            updateReservationSummary();
        }
    };

    window.sendReservation = function() {
        if (reservationData.length === 0) {
            alert('Agrega al menos una reserva');
            return;
        }

        // Construir mensaje
        let message = 'RESERVA DE SABOR & CAFÉ\n\n';
        reservationData.forEach((res, index) => {
            message += `RESERVA #${index + 1}\n`;
            message += `Nombre: ${res.name}\n`;
            message += `Contacto: ${res.contact}\n`;
            message += `Día: ${res.day}\n`;
            message += `Hora: ${res.time}\n`;
            message += `Sucursal: ${res.branch}\n`;
            message += `Productos: ${res.products.join(', ')}\n\n`;
        });

        message += 'Te responderemos dentro de la próxima hora para confirmar tu reserva.';

        // Opciones para enviar
        const contactInfo = reservationData[0].contact;
        const isEmail = contactInfo.includes('@');
        
        if (isEmail) {
            // Enviar por email
            window.location.href = `mailto:sabor.cafe@example.com?subject=Nueva Reserva&body=${encodeURIComponent(message)}`;
        } else {
            // Enviar por WhatsApp
            const phone = contactInfo.replace(/\D/g, '');
            window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        }

        alert('Tu reserva ha sido enviada. Nos pondremos en contacto pronto.');
        clearReservation();
    };

    // Cargar resumen al iniciar
    updateReservationSummary();

});
