const contacto = () => {
    const section = document.getElementById('contacto');
    section.innerHTML = `
        <h2>Contacto</h2>
        <p>¡Contáctanos para reservar una cita!</p>
        <form id="contactForm">
            <label for="name">Nombre:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Correo electrónico:</label><br>
            <input type="email" id="email" name="email" required><br>
            <label for="message">Mensaje:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br>
            <button type="submit">Enviar</button>
        </form>
        <div id="statusMessage"></div>
    `;

    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const isValid = validateForm(formData);

        if (isValid) {
            const response = await fetch('https://example.com/send-email', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                statusMessage.textContent = 'Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.';
                statusMessage.style.color = 'green';
                contactForm.reset();
            } else {
                statusMessage.textContent = 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
                statusMessage.style.color = 'red';
            }
        }
    });

    function validateForm(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.trim() === '') {
            alert('Por favor, introduce tu nombre.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Por favor, introduce una dirección de correo electrónico válida.');
            return false;
        }

        if (message.trim() === '') {
            alert('Por favor, escribe un mensaje.');
            return false;
        }

        return true;
    }
};

export default contacto;

