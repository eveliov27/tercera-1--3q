console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Sobre Nosotros",
        "url_image": "./img/logo_fisio.PNG",
        "desc": "Estamos para servirle.",
        "cta": "Mostrar más...",
        "link": "./contacto.php"
    },
    {
        "title": "Tipos de Terapia",
        "url_image": "./img/rehabilitacion.jpg",
        "desc": "Contamos con terapia fisica de preparacion para su deporte favorito",
        "cta": "Mostrar más...",
        "link": "./servicios.php"
    },
    {
        "title": "Lesiones y Post-Operatorio",
        "url_image": "./img/terapia_fisica.jpg",
        "desc": "Servicios de rehabilitacion para lesiones y post-operatorios",
        "cta": "Mostrar más...",
        "link": "./servicios.php"
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