console.log("cards.js loaded");

const dataCards = [
    {
        "title": "Terapia de Lesiones",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/logo_blanco.PNG",
        "desc": `Contamos con paquetes de sesiones de terapia para asegurarnos de una mejor recuperacion de tu lesion.

Agenda tu cita hoy mismo.`,
        "cta": "Agendar...",
        "link": "./contacto.php"
    },
    {
        "title": "Planes terapia física",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/fisio_terapia.png",
        "desc": `1. 5 sesiones 90 000
2. 8 sesiones 145 000
3. 10 sesiones 180 000`,
        "cta": "Agendar...",
        "link": "./contacto.php"
    },
    {
        "title": "Planes de rehabilitación",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/post_operatorio.png",
        "desc": `1. 5 sesiones 70 000
2. 8 sesiones 110 000
3. 10 sesiones 130 000`,
        "cta": "Agendar...",
        "link": "./contacto.php"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing cards...");
    
    const container = document.querySelector('.card-list');
    if (!container) {
        console.error('Error: .card-list container not found');
        return;
    }

    let CARD = {
        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item,index));
            })
        },

        tplCardItem: function(item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();
});