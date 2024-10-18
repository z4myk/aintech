import React from 'react'
import logoat from '../assets/logoat.png'
export const SchemaMarkup = () => {
    return (
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aintech - Soluciones Digitales",
              "url": "https://aintech.com.ar/",
              "logo": "https://res.cloudinary.com/dxc0vxy8m/image/upload/v1729257337/FOTOINSTAGRAMPRINCIPAL_cd9bji.png",
              "description": "¡Impulsa tu presencia en línea con nuestra agencia de diseño y desarrollo web! Ofrecemos soluciones creativas de Diseño Gráfico, Desarrollo Web y Hosting para potenciar tu marca.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service"
              },
              "email": "agencia@aintech.com.ar",
              "sameAs": [
                "https://www.facebook.com/Aintechagency/",
                "https://www.instagram.com/aintech.agency"
              ]
            }
          `}
        </script>
    )
}
