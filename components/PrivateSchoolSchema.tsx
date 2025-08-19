"use client"

interface PrivateSchoolSchemaProps {
  locationName: string
  locationState?: string
  zipCode?: string
  streetAddress?: string
  telephone?: string
  email?: string
  url?: string
}

export default function PrivateSchoolSchema({
  locationName,
  locationState = "TX",
  zipCode = "77357",
  streetAddress = "22893 Antique Ln",
  telephone = "(832) 957-7530",
  email = "info@brightmindsfutureleaders.com",
  url
}: PrivateSchoolSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PrivateSchool",
    "name": `Bright Minds Future Leaders - ${locationName} Private School`,
    "alternateName": [`Private School ${locationName} TX`, `${locationName} Micro School`],
    "description": `Premier private school serving ${locationName}, Texas with personalized education, small class sizes, and character development. Alternative to public school districts.`,
    "url": url || `https://brightmindsfutureleaders.com/areas/${locationName.toLowerCase().replace(' ', '-')}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": "New Caney",
      "addressRegion": locationState,
      "postalCode": zipCode,
      "addressCountry": "US"
    },
    "telephone": telephone,
    "email": email,
    "areaServed": [
      {
        "@type": "City",
        "name": locationName,
        "addressRegion": locationState,
        "addressCountry": "US"
      },
      {
        "@type": "City", 
        "name": "New Caney",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Humble", 
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Kingwood",
        "addressRegion": "TX", 
        "addressCountry": "US"
      }
    ],
    "educationalLevel": "Elementary School",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Elementary School Students"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Private School Education Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalOccupationalProgram",
            "name": "Micro School Education",
            "description": "Personalized private school education with maximum 8 students per class",
            "provider": {
              "@type": "PrivateSchool",
              "name": "Bright Minds Future Leaders"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "EducationalOccupationalProgram",
            "name": "Character Development Program",
            "description": "Character-focused education integrated with academic learning",
            "provider": {
              "@type": "PrivateSchool",
              "name": "Bright Minds Future Leaders"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalOccupationalProgram", 
            "name": "Small Class Learning",
            "description": "Small class sizes with individualized attention for each student",
            "provider": {
              "@type": "PrivateSchool",
              "name": "Bright Minds Future Leaders"
            }
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Angela Gilmer",
      "jobTitle": "Founder & Lead Educator",
      "description": "Experienced educator with Master's degree in Elementary Education"
    },
    "openingHours": "Mo-Fr 08:30-15:30",
    "priceRange": "Contact for pricing",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "keywords": [
      `private school ${locationName} TX`,
      `${locationName} private school`,
      `micro school ${locationName}`,
      `personalized education ${locationName}`,
      `small class sizes ${locationName}`,
      `character development ${locationName}`,
      `alternative education ${locationName}`
    ],
    "sameAs": [
      "https://www.facebook.com/brightmindsfutureleaders",
      "https://book.brightmindsfutureleaders.com"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}