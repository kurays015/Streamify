const siteMetadata = {
  title: "Streamify",
  author: "Christ Narvarte",
  headerTitle: "Streamify",
  description:
    "Streamify is a streaming platform of bunch of movies, series, and anime. You can also read lightnovel and manga ad free.",
  language: "en-us",
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  siteRepo: "https://github.com/jolbol1/JamesShopland.com",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "hello@jamesshopland.com",
  github: "https://github.com/jolbol1",
  twitter: "https://twitter.com/JollyShopland",
  facebook: "https://facebook.com",
  youtube: "https://www.youtube.com/@JollyCoding",
  linkedin: "https://www.linkedin.com/in/james-shopland",
  locale: "en-GB",
  giscusConfig: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
    mapping: "pathname",
    reactions: "1",
    metadata: "0",
    theme: "light",
    darkTheme: "transparent_dark",
    themeURL: "",
    lang: "en",
  },
  kbarConfig: {
    searchDocumentsPath: "search.json",
  },
};

export default siteMetadata;
