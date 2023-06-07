// Custom Element 'custom-about' para la sección Acerca de Nosotros
class CustomAbout extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Establecer el contenido HTML del elemento
      this.innerHTML = `
        <div class="w3-container w3-padding-32" id="about">
          <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Acerca de Nosotros</h2>
          <p>SMD Bienes y Raíces es una empresa líder en el sector inmobiliario, comprometida con la excelencia y la satisfacción del cliente. Con más de una década de experiencia, nuestro equipo altamente capacitado ofrece servicios personalizados para comprar, vender o alquilar propiedades. Nuestra amplia red de contactos nos brinda acceso a propiedades exclusivas y oportunidades de inversión. Establecemos relaciones basadas en la confianza, la transparencia y la integridad, y nos esforzamos por superar las expectativas de nuestros clientes. ¡Contáctenos y descubra cómo podemos ayudarlo a encontrar su lugar perfecto en el mundo de los bienes raíces!
          </p>
        </div>
      `;
    }
  }
  
  // Definir el elemento personalizado 'custom-about'
  customElements.define('custom-about', CustomAbout);
  
  // Custom Element 'custom-footer' para el pie de página
  class CustomFooter extends HTMLElement {
    constructor() {
      super();
  
      // Crear el shadow root
      this.attachShadow({ mode: 'open' });
  
      // Definir el contenido del footer dentro del shadow root
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos del footer */
          .csa {
            background-color: #cccc;
            color: black;
            text-align: center;
            padding: 16px;
          }
  
          .csa a {
            color: blue;
          }
        </style>
  
        <footer class="w3-center csa">
          <p>Hecho por <a href="#" title="W3.CSS" target="_blank" class="w3-hover-text-green">Grupo 5 - Universidad de las Fuerzas Armadas ESPE</a></p>
        </footer>
      `;
    }
  
    connectedCallback() {
      // Lógica adicional al insertar el componente en el DOM
    }
  }
  
  // Definir el elemento personalizado 'custom-footer'
  customElements.define('custom-footer', CustomFooter);
  
  // Crear una clase de componente web 'MyComponent'
  class MyComponent extends HTMLElement {
    constructor() {
      super();
      // Obtener la plantilla del componente desde el elemento con el id 'component-template'
      const template = document.getElementById('component-template');
      const templateContent = template.content;
  
      // Crear un shadow root y adjuntar la copia de la plantilla al componente
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
  
  // Definir el elemento personalizado 'my-component'
  customElements.define('my-component', MyComponent);
  
  // Crear una instancia del componente utilizando la plantilla HTML
  const templateInstance = document.createElement('my-component');
  document.body.appendChild(templateInstance);
  
  // Crear una instancia del componente creando el HTML desde JavaScript
  const jsInstance = document.createElement('my-component');
  const componentContainer = document.getElementById('component-container');
  componentContainer.appendChild(jsInstance);  

  