import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  locationName?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, locationName }) => {
  const fullTitle = `${title} | Filha de Ogum`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Filha de Ogum - Alta Magia e Amarração Amorosa",
    "image": "https://img.supremamidia.com/suprema-img.png",
    "@id": "https://www.amarracaoamorosacuritiba.shop",
    "url": "https://www.amarracaoamorosacuritiba.shop",
    "telephone": "+55 41 99731-7607",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Curitiba",
      "addressLocality": locationName || "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
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
