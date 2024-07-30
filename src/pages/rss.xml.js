import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Aneri Shah",
    description:
      "Aneri Shah is an aspiring software engineering with a focus in quantum computing, low-level programming, and AI/ML engineering.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
