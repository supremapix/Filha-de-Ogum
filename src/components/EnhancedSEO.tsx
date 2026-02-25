import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  locationName?: string;
  state?: 'PR' | 'SC';
  type?: 'website' | 'article' | 'business';
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  canonical, 
  locationName,
  state = 'PR',
  type = 'website'
}) => {
  const fullTitle = `${title} | Filha de Ogum`;
  const siteUrl = "https://www.amarracaoamorosacuritiba.shop";
  const logoUrl = "https://img.supremamidia.com/suprema-img.png";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Filha de Ogum - Alta Magia e Amarração Amorosa",
    "alternateName": "Suprema Mídia - Consultoria Espiritual",
    "image": logoUrl,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+55 41 99731-7607",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Curitiba",
      "addressLocality": locationName || "Curitiba",
      "addressRegion": state,
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -25.4284,
        "longitude": -49.2733
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Paraná"
      },
      {
        "@type": "State",
        "name": "Santa Catarina"
      },
      {
        "@type": "City",
        "name": locationName || "Curitiba"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Espirituais Suprema Mídia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amarração Amorosa",
            "description": "Trabalhos de união de casais e reconciliação amorosa com alta magia."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza Espiritual",
            "description": "Afastamento de energias negativas e abertura de caminhos."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://wa.me/5541997317607"
    ],
    "description": description
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      
      {/* Geolocation */}
      <meta name="geo.region" content={`BR-${state}`} />
      <meta name="geo.placename" content={locationName || "Curitiba"} />
      <meta name="geo.position" content="-25.4290;-49.2671" />
      <meta name="ICBM" content="-25.4290, -49.2671" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://img.supremamidia.com" />
      
      {/* Font Optimization */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      {/* Advanced SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#dc2626" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {/* Critical CSS Hint */}
      <style type="text/css">{`
        body { background-color: #f5f5f4; margin: 0; font-family: 'Inter', sans-serif; }
        .hero-title { font-family: 'Playfair Display', serif; }
      `}</style>
    </Helmet>
  );
};
