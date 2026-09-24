import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { business } from "./src/data/business.ts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, process.cwd(), "").VITE_SITE_URL?.replace(
    /\/$/,
    "",
  );
  if (siteUrl && !/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(siteUrl))
    throw new Error(
      "VITE_SITE_URL must be an HTTPS origin, such as https://your-domain.com",
    );
  const description = `${business.name} in S. Alangulam, Madurai provides dedicated Mathematics tuition for Secondary and Higher Secondary students. Call or WhatsApp to enquire.`;
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "rls-business-metadata",
        transformIndexHtml() {
          return [
            {
              tag: "meta",
              attrs: { name: "description", content: description },
            },
            {
              tag: "meta",
              attrs: {
                property: "og:title",
                content: `${business.name} | Academic Support in Madurai`,
              },
            },
            {
              tag: "meta",
              attrs: { property: "og:description", content: description },
            },
            { tag: "meta", attrs: { property: "og:type", content: "website" } },
            { tag: "meta", attrs: { property: "og:locale", content: "en_IN" } },
            {
              tag: "meta",
              attrs: { property: "og:site_name", content: business.name },
            },
            ...(siteUrl
              ? [
                  {
                    tag: "link",
                    attrs: { rel: "canonical", href: `${siteUrl}/` },
                  },
                  {
                    tag: "meta",
                    attrs: { property: "og:url", content: `${siteUrl}/` },
                  },
                ]
              : []),
            {
              tag: "script",
              attrs: { type: "application/ld+json" },
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "EducationalOrganization"],
                name: business.name,
                description,
                telephone: business.links.phone.replace("tel:", ""),
                foundingDate: String(business.founded),
                ...(siteUrl ? { url: `${siteUrl}/` } : {}),
                hasMap: business.links.maps,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: business.streetAddress,
                  addressLocality: "Madurai",
                  addressRegion: "Tamil Nadu",
                  postalCode: "625017",
                  addressCountry: "IN",
                },
                areaServed: ["Chennai", "Madurai", "Tuticorin"].map((name) => ({
                  "@type": "City",
                  name,
                })),
              }).replace(/</g, "\\u003c"),
            },
            {
              tag: "noscript",
              injectTo: "body-prepend",
              children: `<div style="padding:40px;max-width:720px;margin:auto;font:16px/1.8 sans-serif"><h1>${business.name}</h1><p>Dedicated Mathematics tuition in Madurai since ${business.founded}.</p><p>Secondary and Higher Secondary Mathematics guidance, alongside academic assistance for Classes IX–XII, B.Sc, M.Sc and Engineering Mathematics.</p><p>${business.address}</p><p><a href="${business.links.phone}">Call ${business.phone}</a> · <a href="${business.links.whatsapp}">Enquire on WhatsApp</a> · <a href="${business.links.maps}">Get directions</a></p><p>${business.hours}</p></div>`,
            },
          ];
        },
      },
    ],
  };
});
