import Script from "next/script";

interface SchemaProps {
  pageType?: "about" | "contact" | "join" | "privacy" | "terms" | "blogs" | "courses" | "cities" | "home" | "search" | "sitemap";
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
}

export default function Schema({ 
  pageType = "about", 
  pageTitle = "الدول التدريبية العالمية Training",
  pageDescription = "الدول التدريبية العالمية Training provides innovative training courses across multiple industries and global hubs.",
  pageUrl = "https://ar.euroqst.com"
}: SchemaProps) {
  
  const baseSchema ={
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ar.euroqst.com/#organization",
        "name": "الدول التدريبية العالمية Training",
        "alternateName": "الدول التدريبية العالمية",
        "url": "https://ar.euroqst.com",
        "logo": "https://ar.euroqst.com/assets/images/logo.svg",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+421 911 803 183",
            "email": "info@euroqst.com",
            "contactType": "customer support",
            "areaServed": "Worldwide",
            "availableLanguage": [
              "en",
              "ar"
            ]
          }
        ],
        "sameAs": [
          "https://www.facebook.com/euroquest.international"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ar.euroqst.com/#website",
        "url": "https://ar.euroqst.com",
        "name": "الدول التدريبية العالمية Training",
        "publisher": {
          "@id": "https://ar.euroqst.com/#organization"
        }
      }
    ]
  }
  return (
    <Script
      id={`${pageType}-schema`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema),
      }}
    />
  );
}
