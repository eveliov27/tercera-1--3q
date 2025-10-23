console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Juego del año",
        "url_image": "./img/juego.webp",
        "desc": "El mejor del año, esta vez fue otorgado para un título muy importante lanzado en julio pasado para la consola Nintendo.",
        "cta": "Mostrar más...",
        "link": "./contacto.php"
    },
    {
        "title": "Xbox",
        "url_image": "./img/xbox.png",
        "desc": "Variedad de nuevos títulos",
        "cta": "Mostrar más...",
        "link": "./xbox.php"
    },
    {
        "title": "Playstation",
        "url_image": "./img/playstation.jpg",
        "desc": "Muchos juegos exclusivos",
        "cta": "Mostrar más...",
        "link": "./ps5.php"
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