console.log("Cargando Acordión...");

const dataAccordion = [
  {
    title: "Terapia de Lesiones",
    desc: `La Terapia de Lesiones es un conjunto de técnicas y tratamientos destinados 
    a acelerar la recuperación del cuerpo tras una lesión, restaurando la función 
    normal de los tejidos y previniendo secuelas a largo plazo.
    
    Su importancia radica en que permite una recuperación segura, controlada y 
    efectiva, reduciendo el dolor, la inflamación y el riesgo de recaídas.

    Entre sus principales beneficios se destacan:

    • Alivio del dolor y la inflamación: mediante masajes, fisioterapia, 
      crioterapia o electroterapia se mejora la circulación y se reducen molestias.

    • Aceleración del proceso de curación: estimula la regeneración de tejidos 
      blandos, músculos y articulaciones.

    • Prevención de complicaciones y recaídas: ayuda a recuperar la fuerza, 
      flexibilidad y movilidad, evitando futuras lesiones.

    • Reeducación funcional: restaura la coordinación y el movimiento natural 
      del cuerpo.

    • Mejora del bienestar general: favorece la confianza del paciente, el 
      equilibrio físico y emocional, y una reincorporación más rápida a las 
      actividades cotidianas o deportivas.`,
  },
  {
    title: "Cuidados Post-Operatorios",
    desc: `Los cuidados post-operatorios en fisioterapia son fundamentales para garantizar una recuperación completa, segura y funcional después de una cirugía. Su importancia radica en que permiten restaurar la movilidad, fuerza y funcionalidad del área intervenida, evitando complicaciones y mejorando la calidad de vida del paciente.

Entre sus principales objetivos y beneficios destacan:

Disminuir el dolor y la inflamación mediante técnicas físicas como crioterapia, masajes o ejercicios suaves.

Prevenir rigidez articular y atrofia muscular, manteniendo la movilidad y tono muscular durante el proceso de recuperación.

Favorecer la cicatrización y regeneración de tejidos, mejorando la circulación y oxigenación de la zona afectada.

Acelerar la recuperación funcional, ayudando al paciente a reincorporarse progresivamente a sus actividades diarias o deportivas.

Evitar complicaciones postquirúrgicas, como adherencias, edemas o pérdida de movilidad.`,
  },
  {
    title: "Dónde estamos ubicados?",
    desc: "Estamos en Alajuela Centro, diagonal al Mini Super Los Angeles en Canoas.",
  },
];

(function () {
  let ACCORDION = {
    init: function () {
      let _self = this;
      this.insertData(_self);
      this.eventhandler(_self);
    },

    insertData: function (_self) {
      console.log("Inserting data into accordion...");
      dataAccordion.map(function (item, index) {
        document
          .querySelector(".main-accordion-container")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item, index));
      });
    },

    eventhandler: function (_self) {
      let arrayRefs = document.querySelectorAll(".accordion-title");
      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener("click", function (event) {
          //console.log("Evento: ", event);
          _self.showTab(event.target);
        });
      }
    },

    tplAccordionItem: function (item, index) {
      let imageHtml = '';
      
      if (index === 0) {
          imageHtml = `
          <div class="accordion-image-container">
              <img src="/proyectos/proyectos/tercera-1--3q/img/rehabilitacion.jpg" 
                   class="accordion-image" 
                   alt="Rehabilitación">
          </div>`;
      } else if (index === 1) {
          imageHtml = `
          <div class="accordion-image-container">
              <img src="/proyectos/proyectos/tercera-1--3q/img/terapia_fisica.jpg" 
                   class="accordion-image" 
                   alt="Terapia Física">
          </div>`;
      } else if (index === 2) {
          imageHtml = `
          <div class="accordion-image-container">
              <img src="/proyectos/proyectos/tercera-1--3q/img/location_map.png" 
                   class="accordion-image" 
                   alt="Nuestra Ubicación">
              <div class="location-links">
                  <a href="https://ul.waze.com/ul?venue_id=180748388.1807483883.23747476&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" 
                     target="_blank" 
                     class="map-link">
                     <img src="/proyectos/proyectos/tercera-1--3q/img/waze-icon.jpg" alt="Waze">
                     Abrir en Waze
                  </a>
                  <a href="https://www.google.com/maps/place/Mini+Super+los+Angeles/@10.0314062,-84.2014325,19z/data=!3m1!4b1!4m6!3m5!1s0x8fa0f7004f8274a5:0x83790fe5682d1c45!8m2!3d10.0314049!4d-84.2007888!16s%2Fg%2F11wwytz7qb?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
                     target="_blank" 
                     class="map-link">
                     <img src="/proyectos/proyectos/tercera-1--3q/img/gmaps-icon.png" alt="Google Maps">
                     Abrir en Google Maps
                  </a>
              </div>
          </div>`;
      }

      return `<div class='accordion-item'>
          <div class='accordion-title'><p>${item.title}</p></div>
          <div class='accordion-desc'>
              <div class="accordion-text"><p>${item.desc}</p></div>
              ${imageHtml}
          </div>
      </div>`;
    },

    showTab: function (refItem) {
      // Fix: Add dot for class selector and get the accordion-item parent
      let activeTab = document.querySelector(".tab-active");
      if (activeTab) {
        activeTab.classList.remove("tab-active");
      }
      // Fix: Get the closest accordion-item parent
      const accordionItem = refItem.closest('.accordion-item');
      if (accordionItem) {
        accordionItem.classList.toggle("tab-active");
      }
    },
  };
  ACCORDION.init();
})();
