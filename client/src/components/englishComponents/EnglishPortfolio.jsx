import React from 'react'
import portfolio from '../../assets/portfolio.png'
export const EnglishPortfolio = () => {
    return (
      <>
      <section className="container"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="row" id="portfolio">
          <div className="col-sm-12 col-md-1">

          
          <div className=" container">
            <div className="PortfolioText mx-5">
              
          <h2 className="textServicios mt-5 text-light text-center  p-3  bgColorAbout">P<br />O<br />R<br />T<br />F<br />O<br />L<br />I<br />O</h2>
            </div>
            <div className=" bgColorAbout ">
          <h1 className="textServicios mt-5 text-light text-center PortfolioMobile ">PORTFOLIO</h1>
            </div>
          </div>
          </div>
          <div className="col-sm-12 col-md-10">

          
          <div className="text-center position-relative portfolio-container">
  <img src={portfolio} alt="Portfolio" className="widthPortfolio" />
  <div className="position-absolute top-50 start-50 translate-middle">
    <a href="https://www.instagram.com/aintech.agency" target="_blank" className="text-decoration-none">
    <button className="botonVerMas" >
  <span>See More</span>
</button>
    </a>
  </div>
</div>
</div>

        </div>
      </section>
    </>
    )
}
