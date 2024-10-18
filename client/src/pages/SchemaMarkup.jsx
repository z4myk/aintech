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
              "logo": "${logoat}",
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
