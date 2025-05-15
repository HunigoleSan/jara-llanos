
let Servicios_cards = [
    {
        nombre: "Blanqueamiento Dental",
        descripcion:"Sonrisa más blanca y brillante",
        icono: "blanqueamiento",
    },

    {
        nombre: "Endodoncia",
        descripcion:"Cuidado profundo para tu sonrisa",
        icono: "endodoncia",
        
        tipos:`
            <ul class='list-services'>
                <li><i class='bx bx-check'></i> Anterior</li>
                <li><i class='bx bx-check'></i> Premolar</li>
                <li><i class='bx bx-check'></i> Molar</li>
            </ul>
        `
    },

    {
        nombre: "Ortodoncia",
        descripcion:"Alinea tu sonrisa con precisión",
        icono: "ortodoncia",
    },

    {
        nombre: "Implantes Dentales",
        descripcion:"Sonrisa completa y natural",
        icono: "implante",
    },

    {
        nombre: "Curaciones",
        descripcion: "Restauración dental rápida y efectiva",
        icono: `<svg width="63" height="65" viewBox="0 0 63 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8675 52.8028C18.8322 57.7657 18.5171 64.5361 23.8162 64.5361C29.1154 64.5361 28.5855 44.2695 31.765 44.2695C34.9444 44.2695 34.6591 48.5361 35.4744 53.8695L35.5043 54.0657C36.5446 60.8732 37.1043 64.5361 41.3034 64.5361C45.5427 64.5361 48.1923 53.3361 48.7222 50.1361C49.2521 46.9361 55.0812 39.4695 57.2009 34.6695C59.3205 29.8695 58.7906 24.0028 54.5513 18.6695M15.8675 52.8028C15.1299 51.568 14.3918 50.3535 13.6692 49.1546M15.8675 52.8028L13.6692 49.1546M8.44872 39.6456C5.89984 34.0254 4.75098 28.4645 6.85897 22.4028C10.5684 11.7361 29.1154 17.0695 31.765 17.6028C31.765 17.6028 36.95 16.0506 40.2436 15.4695C44.1202 14.7855 47.807 15.3278 47.807 15.3278M13.6692 49.1546C11.6503 51.3901 10.5684 56.5361 10.5684 56.5361C10.5684 56.5361 9.88478 51.2564 7.9188 49.0695C5.95283 46.8825 0.5 45.3361 0.5 45.3361C0.5 45.3361 4.893 44.2189 6.85897 42.1361C8.82495 40.0533 10.5684 34.6695 10.5684 34.6695C10.5684 34.6695 12.2083 40.0533 14.2778 42.1361C16.3472 44.2189 21.1667 45.3361 21.1667 45.3361C21.1667 45.3361 15.8173 46.8825 13.7479 49.0695C13.7215 49.0973 13.6953 49.1257 13.6692 49.1546ZM47.807 15.3278C45.7373 14.1919 43.4231 13.3361 43.4231 13.3361C43.4231 13.3361 47.9196 12.544 49.7821 10.6695C51.6446 8.79495 52.9615 3.73613 52.9615 3.73613C52.9615 3.73613 54.2785 8.26162 56.141 10.1361C58.0035 12.0107 62.5 13.3361 62.5 13.3361C62.5 13.3361 58.0035 14.6616 56.141 16.5361C54.2785 18.4107 52.9615 22.9361 52.9615 22.9361C52.9615 22.9361 52.1745 18.944 50.312 17.0695C49.7132 16.4669 48.7875 15.8659 47.807 15.3278ZM13.7479 8.0028C13.7479 8.0028 10.7985 9.19457 9.50855 10.6695C8.16186 12.2092 7.38889 15.4695 7.38889 15.4695C7.38889 15.4695 6.85897 12.8028 5.66929 11.3756C4.23056 9.64974 0.5 8.0028 0.5 8.0028C0.5 8.0028 2.61966 8.0028 4.73932 5.86947C6.85897 3.73613 7.38889 0.536133 7.38889 0.536133C7.38889 0.536133 7.9188 3.73613 9.50855 5.86947C11.0983 8.0028 13.7479 8.0028 13.7479 8.0028Z" stroke="#0E4FB2" stroke-width="2" />
                </svg>`,
        tipos:
            `<ul class='list-services'>
                <li><i class='bx bx-check'></i> Calsa Compuesta</li>
                <li><i class='bx bx-check'></i> Calsa Compleja</li>
                <li><i class='bx bx-check'></i> Calsa Simple</li>
            </ul>`
        
    },

    {
        nombre: "Extracciones",
        descripcion:"Retiro suave y sin molestias",
        icono: "extracciones",
        tipos:
            `<ul class='list-services'>
                <li><i class='bx bx-check'></i> No quirurgica sin sutura</li>
                <li><i class='bx bx-check'></i> Incisivos no quirurgica con sutura</li>
                <li><i class='bx bx-check'></i> Molar no quirurgica con sutura</li>
                <li><i class='bx bx-check'></i> Quirurgica</li>
            </ul>`
    },

    {
        nombre: "Profilaxis",
        descripcion:"Limpieza suave para una sonrisa sana",
        icono: "profilaxis",
    },

    {
        nombre: "Protesis",
        descripcion:"Recupera tu sonrisa con naturalidad",
        icono: "protesis",
        tipos:`
            <ul class='list-services'>
                <li><i class='bx bx-check'></i> Fija</li>
                <li><i class='bx bx-check'></i> Total</li>
                <li><i class='bx bx-check'></i> Total más malla metálica</li>
                <li><i class='bx bx-check'></i> Removible Acrilica (Wipla)</li>
                <li><i class='bx bx-check'></i> Removible Base Metálica</li>
                <li><i class='bx bx-check'></i> Removible Flexible</li>
            </ul>
        `
    },

    {
        nombre: "Brackets",
        descripcion:"Sonrisa alineada con comodidad",
        icono: "dientes",
        tipos:`
            <ul class='list-services'>
                <li><i class='bx bx-check'></i> Metálico</li>
                <li><i class='bx bx-check'></i> Cerámica</li>
                <li><i class='bx bx-check'></i> Zafiro</li>
            </ul>
        `
    },
    
    {
        nombre: "Coronas Dentales",
        descripcion:"Protección y estética para tu sonrisa",
        icono: "coronas",
        tipos:`
            <ul class='list-services'>
                <li><i class='bx bx-check'></i> Porcelana</li>
                <li><i class='bx bx-check'></i> Zirconio + porcelana</li>
            </ul>
        `
    }
]

export default Servicios_cards;