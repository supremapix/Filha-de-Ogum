import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  locationName?: string;
  state?: 'PR' | 'SC' | 'RS' | 'GO' | 'DF';
  type?: 'website' | 'article' | 'business';
  noIndex?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  canonical, 
  locationName,
  state = 'PR',
  noIndex = false,
  type = 'website'
}) => {
  const fullTitle = title.includes("Espaço Pai Laércio") ? title : `${title} | Espaço Pai Laércio`;
  const siteUrl = "https://www.amarracaoamorosacuritiba.shop";
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    "name": "Centro Sagrado Coração de Jesus",
    "alternateName": ["Espaço Pai Laércio", "Pai Laércio"],
    "logo": "https://www.espacopailaercio.com.br/images/logo-transparent.png",
    "url": siteUrl,
    "telephone": "+55 41 98467-9910",
    "email": "laercioadriano@yahoo.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Frei Orlando, 437 - Jardim Social",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "areaServed": { "@type": "Country", "name": "Brasil" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços do Espaço Pai Laércio",
      "itemListElement": ["Amarração Amorosa", "União de Casais", "Limpeza Espiritual"].map(name => ({
        "@type": "Offer", "itemOffered": { "@type": "Service", name }
      }))
    },
    "sameAs": ["https://www.espacopailaercio.com.br"],
    "description": "Orientação espiritual, amarração amorosa, união de casais e limpeza espiritual. Atendimento presencial em Curitiba e online."
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="google-site-verification" content="5XMamsK6WwP7Yfw9IBCR0pdnOtaRh4822VJm5zDg1So" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      
      {/* Geolocation */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Font Optimization */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      {/* Advanced SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, follow" : "index, follow"} />
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
