import Head from "next/head";
import { siteMetadata } from "../../../site.config";

export default function SEO({ title, description = "" }) {
  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>{title + " | " + siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*====== Flaticon ======*/}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/*====== Font Awesome ======*/}
        <link rel="stylesheet" href="assets/css/font-awesome-5.9.0.min.css" />
        {/*====== Bootstrap ======*/}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        {/*====== Magnific Popup ======*/}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/*====== Nice Select ======*/}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/*====== jQuery UI ======*/}
        <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
        {/*====== Animate ======*/}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/*====== Slick ======*/}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/*====== Main Style ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="icon" type="image/png" href="assets/favicon_io/favicon.ico" />
      <link rel="shortcut icon" type="image/png" href="assets/favicon_io/favicon.ico" /> 
    </Head>
  );
}
