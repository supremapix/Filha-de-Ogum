import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  locationName?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, locationName }) => {
  const fullTitle = `${title} | Espaço Pai Laercio`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Espaço Pai Laercio - Alta Magia e Amarração Amorosa",
    "image": "https://img.supremamidia.com/suprema-img.png",
    "@id": "https://www.amarracaoamorosacuritiba.shop",
    "url": "https://www.amarracaoamorosacuritiba.shop",
    "telephone": "+55 41 3222-8276",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Frei Orlando, 437 - Jardim Social",
      "addressLocality": locationName || "Curitiba",
      "addressRegion": "PR",
      "postalCode": "82530-040",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4222,
      "longitude": -49.2319
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:30"
    },
    "sameAs": [
      "https://wa.me/5541984679910",
      "https://wa.me/5541985223500",
      "https://wa.me/5541995528940",
      "https://www.espacopailaercio.com.br"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://img.supremamidia.com/suprema-img.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://img.supremamidia.com/suprema-img.png" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
