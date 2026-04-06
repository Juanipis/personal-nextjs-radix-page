import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#3b82f6" />
        <meta property="og:site_name" content="Juanipis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@juanipis" />
        <link rel="canonical" href="https://juanipis.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Pablo Diaz Correa",
              alternateName: "Juanipis",
              url: "https://juanipis.vercel.app",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "EIA University",
              },
              sameAs: [
                "https://linkedin.com/in/juanipis",
                "https://github.com/Juanipis",
                "https://twitter.com/juanipis",
                "https://instagram.com/juanipis",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
