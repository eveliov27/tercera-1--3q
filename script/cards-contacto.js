console.log("cards-contacto.js loaded");

const dataCards = [
    {
        "title": "Quienes somos",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/logo_fisio.PNG",
        "desc": `Queremos que conozcas mas sobre nosotros y nuestra experiencia, para demostrarte que estas en buenas manos.

Nosotros somos....`,
    },
    {
        "title": "Ronald Vega Arroyo - Fisioterapeuta",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/fisio_terapia.png",
        "desc": `Soy fisioterapeuta hace tres años pero llevo cinco años trabajando en esta área, desde que comencé mi carrera me interese en aprender de los mejores e ir practicando con personas que ya ejercían su carrera para que al momento de culminar la mía, tuviera mas herramientas para mis pacientes. 
Mis estudios no terminan con la licenciatura, siempre me llamo la atención llevar más allá mi carrera. Tome la desición de adentrarme en el mundo del deporte y ortopedia ya que por muchos años practique múltiples actividades deportivas y siempre fueron mi pasión, por lo que me pareció genial combinar mi carrera con mi pasión y ayudar a los que aun siguen fervientemente sus sueños. 

Títulos 
Licenciatura terapia física y rehabilitación 
Método Mckenzie A y B 
Especialidad en rehabilitación en movimiento
Concepto Mulligan 
Neurociencia del dolor `,
    },
    {
        "title": "Julianna Rodríguez Acevedo",
        "url_image": "http://localhost/proyectos/proyectos/tercera-1--3q/img/post_operatorio.png",
        "desc": `Soy fisioterapeuta hace un año, enfocada en el área de adulto mayor y neurología, siempre queriendo dar todo de mi para mis pacientes, actualizándome constantemente para darles la atención que se merecen y necesitan según sus condiciones. Sin embargo toda mi vida fui atleta de alto rendimiento por lo que uni ambas partes de mi para ayudar a personas a mejorar su calidad de vida y buscar su mejor versión con entrenamiento terapéutico, brindándoles mayor confianza en el trabajo que realizar y un ambiente seguro para su entrenamientos. 

Títulos
Licenciatura en terapia física y rehabilitación 
Concepto Bobath (introducción y básico)
Complex` ,
        
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing contact cards...");
    
    const container = document.querySelector('.contact-list');
    if (!container) {
        console.error('Error: .contact-list container not found');
        return;
    }

    let CONTACT = {
        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.contact-list').insertAdjacentHTML('beforeend', _self.tplContactItem(item,index));
            })
        },

        tplContactItem: function(item, index) {
            return(`<div class='card-item' id='contact-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                </div>
            </div>`)
        },
    }
    CONTACT.init();
});