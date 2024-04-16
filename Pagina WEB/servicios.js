const servicios = () => {
    const section = document.getElementById('servicios');
    section.innerHTML = `
        <h2>Servicios</h2>
        <ul>
            <li>Consultas veterinarias</li>
            <li>Vacunaciones</li>
            <li>Cirugías</li>
            <li>Exámenes de laboratorio</li>
            <li>Estética animal</li>
        </ul>
    `;
};

export default servicios;


