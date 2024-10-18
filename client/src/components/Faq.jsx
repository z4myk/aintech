import React from 'react'

export const Faq = () => {
    return (
        <section className="container mt-5">
            <h2 className="text-light text-center textServicios">PREGUNTAS FRECUENTES</h2>
            <div className="d-flex justify-content-around mb-5">
            <hr className="p-1 w-25 rounded text-danger bg-danger" />
            <hr className="p-1 w-25 rounded text-danger bg-danger" />
            </div>

            <div class="accordion accordion-flush container" id="accordionFlushExample">
        <div class="accordion-item borderFaq">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             <i class="fi fi-rs-comment-question mx-2"></i> ¿Qué servicios ofrece su agencia de diseño web y gráfico?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body backgroundFaq text-light p-4 ">
            En nuestra agencia, ofrecemos una amplia gama de servicios de diseño web y gráfico. Esto incluye el desarrollo de sitios web personalizados, diseño de tiendas en línea (e-commerce), creación de logotipos y branding, diseño gráfico para materiales impresos y digitales, y servicios de optimización SEO para mejorar la visibilidad de los sitios web en los motores de búsqueda.
            </div>
          </div>
        </div>



        <div class="accordion-item borderFaq">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
            <i class="fi fi-rs-comment-question mx-2"></i> ¿Cuánto cuesta desarrollar un sitio web en su agencia?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            El costo de desarrollar un sitio web puede variar dependiendo de las necesidades y requisitos específicos del proyecto. Ofrecemos opciones flexibles que se adaptan a diferentes presupuestos, desde sitios web informativos básicos hasta soluciones más avanzadas de e-commerce. Te invitamos a contactarnos para obtener una cotización personalizada según tu proyecto.
            </div>
          </div>
        </div>




        <div class="accordion-item borderFaq">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTree"
              aria-expanded="false"
              aria-controls="flush-collapseTree"
            >
            <i class="fi fi-rs-comment-question mx-2"></i> ¿Cuál es el proceso de diseño web que siguen?
            </button>
          </h2>
          <div
            id="flush-collapseTree"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            Nuestro proceso de diseño web comienza con una fase de investigación y planificación para comprender las necesidades y objetivos del cliente. Luego, seguimos con la creación de wireframes y diseños visuales. Una vez aprobado el diseño, desarrollamos el sitio utilizando tecnologías modernas. Finalmente, realizamos pruebas exhaustivas y lanzamos el sitio web, asegurándonos de que esté optimizado para SEO y sea compatible con dispositivos móviles.
            </div>
          </div>
        </div>




        <div class="accordion-item borderFaq">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed  text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
            <i class="fi fi-rs-comment-question mx-2"></i> ¿Ofrecen servicios de rediseño para sitios web existentes?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            Sí, también ofrecemos servicios de rediseño para sitios web existentes. Si tu sitio web actual necesita una actualización para ser más moderno, rápido y optimizado para dispositivos móviles, podemos trabajar en un rediseño completo que se adapte a las últimas tendencias y mejore el rendimiento general.
            </div>
          </div>
        </div>



        <div class="accordion-item borderFaq">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed  text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
            <i class="fi fi-rs-comment-question mx-2"></i>  Si vivo afuera de Argentina ¿puedo contratar el servicio?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
              Por supuesto, puede desde cualquier parte del mundo.

Respecto a los métodos de pago, utilizamos <b>(Paypal o Binance)</b> no obstante si desde su país de referencia tiene problemas para realizar un pago, puede contactar con nuestro equipo de soporte para que le ayuden en el proceso.
            </div>
          </div>
        </div>



        <div class="accordion-item borderFaq ">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
            <i class="fi fi-rs-comment-question mx-2"></i>  ¿Puedo solicitar solo diseño gráfico sin desarrollo web?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            class="accordion-collapse collapse text-light "
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            Sí, ofrecemos servicios de diseño gráfico de manera independiente. Ya sea que necesites un nuevo logotipo, materiales de marketing como folletos y tarjetas de presentación, o cualquier otro diseño visual, nuestro equipo de diseñadores gráficos está listo para ayudarte a crear piezas visuales impactantes que representen tu marca.
            </div>
          </div>
        </div>

        <div class="accordion-item  borderFaq ">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
           <i class="fi fi-rs-comment-question mx-2"></i>   ¿Qué es el branding y por qué es importante para mi negocio?
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            class="accordion-collapse collapse text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            El branding es el proceso de construir y gestionar la identidad de tu marca para hacerla memorable y reconocible. Incluye elementos visuales como el diseño del logotipo, colores, tipografía, y el tono de comunicación de tu empresa. Un buen branding es esencial para diferenciar tu negocio de la competencia y crear una conexión emocional con tus clientes, lo que puede aumentar la lealtad y las ventas.
            </div>
          </div>
        </div>

        <div class="accordion-item borderFaq ">
          <h2 class="accordion-header ">
            <button
              className="accordion-button collapsed text-primary backgroundFaq text-light p-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
          <i class="fi fi-rs-comment-question mx-2"></i>  ¿Qué diferencia Aintech Agency de otras empresas de diseño gráfico?
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            class="accordion-collapse collapse  text-light"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body  backgroundFaq text-light p-4 ">
            Nos diferenciamos por nuestro enfoque personalizado en cada proyecto. No solo diseñamos gráficos atractivos, sino que nos aseguramos de que cada elemento visual esté alineado con la estrategia de marca y los objetivos comerciales de nuestros clientes. Además, combinamos creatividad con conocimiento técnico para crear diseños que no solo se vean bien, sino que también funcionen eficazmente para tu negocio.
            </div>
          </div>
        </div>


      </div>
        </section>
    )
}
