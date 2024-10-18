import React from 'react'

export const EnglishFaq = () => {
    return (
        <section className="container mt-5">
        <h2 className="text-light text-center textServicios">FREQUENTLY ASKED QUESTIONS</h2>
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
         <i class="fi fi-rs-comment-question mx-2"></i> What services does your web and graphic design agency offer?
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body backgroundFaq text-light p-4 ">
        At our agency, we offer a wide range of web and graphic design services. This includes custom website development, online store (e-commerce) design, logo and branding creation, graphic design for print and digital materials, and SEO optimization services to improve website visibility on the engines. search.
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
        <i class="fi fi-rs-comment-question mx-2"></i> How much does it cost to develop a website at your agency?
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        The cost of developing a website can vary depending on the specific needs and requirements of the project. We offer flexible options to suit different budgets, from basic informational websites to more advanced e-commerce solutions. We invite you to contact us to obtain a personalized quote based on your project.
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
        <i class="fi fi-rs-comment-question mx-2"></i> What is the web design process you follow?
        </button>
      </h2>
      <div
        id="flush-collapseTree"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        Our web design process begins with a research and planning phase to understand the client's needs and objectives. Then, we continue with the creation of wireframes and visual designs. After the design is approved, we develop the site using modern technologies. Finally, we conduct extensive testing and launch the website, making sure it is SEO optimized and mobile friendly.
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
        <i class="fi fi-rs-comment-question mx-2"></i> Do you offer redesign services for existing websites?
        </button>
      </h2>
      <div
        id="flush-collapseFour"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        Yes, we also offer redesign services for existing websites. If your current website needs an update to be more modern, faster and mobile-friendly, we can work on a complete redesign that adapts to the latest trends and improves overall performance.
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
        <i class="fi fi-rs-comment-question mx-2"></i>  If I live outside Argentina, can I contract the service?
        </button>
      </h2>
      <div
        id="flush-collapseFive"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        Of course, you can from anywhere in the world.

Regarding payment methods, we use <b>(Paypal or Binance)</b> however if you have problems making a payment from your reference country, you can contact our support team to help you in the process.
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
        <i class="fi fi-rs-comment-question mx-2"></i>  Can I apply for graphic design only without web development?
        </button>
      </h2>
      <div
        id="flush-collapseSix"
        class="accordion-collapse collapse text-light "
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        Yes, we offer graphic design services independently. Whether you need a new logo, marketing materials like brochures and business cards, or any other visual design, our team of graphic designers is ready to help you create impactful visual pieces that represent your brand.
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
       <i class="fi fi-rs-comment-question mx-2"></i>   What is branding and why is it important for my business?
        </button>
      </h2>
      <div
        id="flush-collapseEight"
        class="accordion-collapse collapse text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        Branding is the process of building and managing your brand identity to make it memorable and recognizable. Include visual elements such as logo design, colors, typography, and your company's tone of communication. Good branding is essential to differentiate your business from the competition and create an emotional connection with your customers, which can increase loyalty and sales.
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
      <i class="fi fi-rs-comment-question mx-2"></i>  What differentiates Aintech Agency from other graphic design companies?
        </button>
      </h2>
      <div
        id="flush-collapseNine"
        class="accordion-collapse collapse  text-light"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body  backgroundFaq text-light p-4 ">
        We differentiate ourselves by our personalized approach to each project. We not only design attractive graphics, we ensure that each visual element is aligned with our clients' brand strategy and business objectives. Additionally, we combine creativity with technical knowledge to create designs that not only look good, but also work effectively for your business.
        </div>
      </div>
    </div>


  </div>
    </section>
    )
}
