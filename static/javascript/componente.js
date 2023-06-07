/// Definición de la clase para el componente personalizado///
class CustomComponent extends HTMLElement {
    constructor() {
      super();
  
      // Crear el shadow root para el componente
      this.attachShadow({ mode: 'open' });
  
      // Obtener el contenido del template del componente
      const template = document.getElementById('custom-component-template');
      const templateContent = template.content.cloneNode(true);
  
      // Agregar el contenido del template al shadow root
      this.shadowRoot.appendChild(templateContent);
  
      // Obtener las referencias a los elementos del componente
      this.titleElement = this.shadowRoot.getElementById('custom-component-title');
      this.text1Element = this.shadowRoot.getElementById('custom-component-text1');
      this.textInfoElement = this.shadowRoot.getElementById('custom-component-text-info');
      this.imageElement = this.shadowRoot.getElementById('custom-component-image');
      this.link1Element = this.shadowRoot.getElementById('custom-component-link1');
      this.link2Element = this.shadowRoot.getElementById('custom-component-link2');
      this.buttonElement = this.shadowRoot.getElementById('custom-component-button');
    }
  
    connectedCallback() {
      // Establecer el contenido de los elementos del componente basado en los atributos
      this.titleElement.textContent = this.getAttribute('title') || 'Título por defecto';
      this.text1Element.textContent = this.getAttribute('text1') || 'Texto 1 por defecto';
      this.textInfoElement.textContent = this.getAttribute('text-info') || 'En SMD Bienes y Raíces nos enorgullece ofrecer un servicio inmobiliario excepcional, respaldado por un equipo apasionado y un liderazgo comprometido. Esperamos poder servirle y ser su socio confiable en todas sus necesidades de bienes raíces.';
      this.buttonElement.textContent = this.getAttribute('button-label') || 'Botón';
  
      // Establecer la imagen del componente si se proporciona el atributo 'image-src'
      const imageSrc = this.getAttribute('image-src');
      if (imageSrc) {
        this.imageElement.setAttribute('src', imageSrc);
      }
  
      // Establecer los enlaces del componente si se proporcionan los atributos correspondientes
      const link1Url = this.getAttribute('link1-url');
      const link1Label = this.getAttribute('link1-label');
      if (link1Url && link1Label) {
        this.link1Element.setAttribute('href', link1Url);
        this.link1Element.textContent = link1Label;
      }
  
      const link2Url = this.getAttribute('link2-url');
      const link2Label = this.getAttribute('link2-label');
      if (link2Url && link2Label) {
        this.link2Element.setAttribute('href', link2Url);
        this.link2Element.textContent = link2Label;
      }
    }
  }
  
  /// Definir el elemento personalizado 'custom-component' ///
  customElements.define('custom-component', CustomComponent);
  
  
  // Clase para el botón de modo oscuro//
  class DarkModeButton extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Agregar el evento de clic al botón para alternar el modo oscuro
      this.addEventListener("click", this.toggleDarkMode);
    }
  
    toggleDarkMode() {
      // Alternar la clase 'dark-mode' en el elemento 'body' del documento
      document.body.classList.toggle("dark-mode");
    }
  }
  
  // Definir el elemento personalizado 'dark-mode-button'
  customElements.define("dark-mode-button", DarkModeButton);
  
  
  /// Clase para el botón de aumento de tamaño de texto ///
  class IncreaseTextButton extends HTMLElement {
    constructor() {
      super();
      // Obtener la cantidad de aumento del atributo 'increase-amount'. Si no se proporciona, se usa un valor predeterminado de 2.
      this.increaseAmount = parseInt(this.getAttribute("increase-amount")) || 2;
      this.addEventListener("click", this.increaseTextSize);
    }
  
    increaseTextSize() {
      // Obtener todos los elementos de texto en el documento (excepto los elementos <script>)
      const allTextElements = document.querySelectorAll("body *:not(script)");
      allTextElements.forEach(element => {
        const fontSize = window.getComputedStyle(element).fontSize;
        const currentSize = parseFloat(fontSize);
        // Aumentar el tamaño de fuente y establecer el peso en negrita
        element.style.fontSize = `${currentSize + this.increaseAmount}px`;
        element.style.fontWeight = "bold";
      });
    }
  }
  
  // Definir el elemento personalizado 'increase-text-button'
  customElements.define("increase-text-button", IncreaseTextButton);
  
  
  /// Clase para el botón de disminución de tamaño de texto ///
  class TextSizeButton extends HTMLElement {
    constructor() {
      super();
      // Obtener la cantidad de cambio del atributo 'change-amount'. Si no se proporciona, se usa un valor predeterminado de 2.
      this.changeAmount = parseInt(this.getAttribute("change-amount")) || 2;
      this.addEventListener("click", this.changeTextSize.bind(this));
    }
  
    changeTextSize() {
      // Obtener todos los elementos de texto en el documento (excepto los elementos <script>)
      const allTextElements = document.querySelectorAll("body *:not(script)");
      allTextElements.forEach(element => {
        const fontSize = window.getComputedStyle(element).fontSize;
        const currentSize = parseFloat(fontSize);
        // Cambiar el tamaño de fuente y alternar entre negrita y normal
        element.style.fontSize = `${currentSize + this.changeAmount}px`;
        element.style.fontWeight = element.style.fontWeight === "bold" ? "normal" : "bold";
      });
    }
  }
  
  // Definir el elemento personalizado 'text-size-button'
  customElements.define("text-size-button", TextSizeButton);  