// laia/src/components/DynamicHead.tsx
import { useLanguage } from "../hooks/useLanguage";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

interface BaseMetadata {
  [key: string]: {
    [key: string]: Metadata;
  };
}

const DynamicHead = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const baseMetadata: BaseMetadata = {
    en: {
      home: {
        title: "Laia Osorio - English & Spanish Teacher",
        description:
          "Learn English and Spanish with personalized online classes. Expert language teacher offering flexible schedules and proven methodology.",
        keywords:
          "english classes, spanish classes, language learning, online teaching, language tutor",
      },
      privacyPolicy: {
        title: "Privacy Policy - Laia Osorio",
        description:
          "Privacy Policy for Laia Martinez's language teaching services. Learn about how we handle and protect your personal information.",
        keywords:
          "privacy policy, data protection, language teaching, personal data",
      },
      terms: {
        title: "Terms and Conditions - Laia Osorio",
        description:
          "Terms and conditions for Laia Martinez's language teaching services. Understanding our service terms and policies.",
        keywords:
          "terms and conditions, service terms, language teaching policies",
      },
      notFound: {
        title: "Page Not Found - Laia Osorio",
        description:
          "The page you're looking for cannot be found. Return to our language learning services homepage.",
        keywords: "404, page not found, language teaching",
      },
    },
    es: {
      home: {
        title: "Laia Osorio - Profesora de Inglés y Español",
        description:
          "Aprende inglés y español con clases online personalizadas. Profesora experta en idiomas que ofrece horarios flexibles y metodología probada.",
        keywords:
          "clases de inglés, clases de español, aprendizaje de idiomas, enseñanza online, tutora de idiomas",
      },
      privacyPolicy: {
        title: "Política de Privacidad - Laia Osorio",
        description:
          "Política de privacidad para los servicios de enseñanza de idiomas de Laia Martinez. Conozca cómo manejamos y protegemos su información personal.",
        keywords:
          "política de privacidad, protección de datos, enseñanza de idiomas, datos personales",
      },
      terms: {
        title: "Términos y Condiciones - Laia Osorio",
        description:
          "Términos y condiciones para los servicios de enseñanza de idiomas de Laia Martinez. Comprenda nuestros términos de servicio y políticas.",
        keywords:
          "términos y condiciones, términos de servicio, políticas de enseñanza de idiomas",
      },
      notFound: {
        title: "Página No Encontrada - Laia Osorio",
        description:
          "La página que busca no se puede encontrar. Vuelva a nuestra página principal de servicios de enseñanza de idiomas.",
        keywords: "404, página no encontrada, enseñanza de idiomas",
      },
    },
  };

  const getMetadata = (): Metadata => {
    switch (location.pathname) {
      case "/":
        return baseMetadata[language].home;
      case "/PrivacyPolicy":
        return baseMetadata[language].privacyPolicy;
      case "/Terms":
        return baseMetadata[language].terms;
      default:
        return baseMetadata[language].notFound;
    }
  };

  const currentMetadata = getMetadata();

  return (
    <Helmet>
      <html lang={language} />
      <title>{currentMetadata.title}</title>
      <meta name="description" content={currentMetadata.description} />
      <meta name="keywords" content={currentMetadata.keywords} />
      <meta name="author" content="Laia Martinez" />

      <meta property="og:title" content={currentMetadata.title} />
      <meta property="og:description" content={currentMetadata.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://yourdomain.com${location.pathname}`}
      />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};

export default DynamicHead;
