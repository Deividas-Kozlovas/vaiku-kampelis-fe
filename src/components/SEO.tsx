import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
};

function setMeta(
  name: string,
  content?: string,
  attr: "name" | "property" = "name"
) {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);

    // Canonical link
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>(
        "link[rel='canonical']"
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");

    // Twitter
    setMeta("twitter:card", twitterCard);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (ogImage) setMeta("twitter:image", ogImage);
  }, [title, description, canonical, ogImage, ogType, twitterCard]);

  return null;
}
