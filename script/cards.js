console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Terapia de Lesiones",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/logo_fisio.PNG",
        "desc": `Contamos con paquetes de sesiones de terapia para asegurarnos de una mejor recuperacion de tu lesion.

        Agenda tu cita hoy mismo.`,
        "cta": "Agendar...",
        "link": "./contacto.php"
    },
    {
        "title": "Cuidados Post-operatorios",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/rehabilitacion.jpg",
        "desc": "Recuperate de una cirugía con nuestros planes personalizados.",
        "cta": "Mostrar más...",
        "link": "./servicios.php"
    },
    {
        "title": "Quienes somos",
        "url_image": "ttp://localhost/proyectos/proyectos/tercera-1--3q/img/terapia_fisica.jpg ",
        "desc": "Conoce nuestros fisios, un poco de su experiencia y resultados.",
        "cta": "Mostrar más...",
        "link": "./sobre_nosotros.php"
    }
];

(function () {
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
})();