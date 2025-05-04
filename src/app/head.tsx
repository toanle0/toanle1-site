// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Toan Le • Web & Cybersecurity</title>
      <meta
        name="description"
        content="Toan Le – CS student @ CSULB, web & cybersecurity enthusiast."
      />
      <meta property="og:title" content="Toan Le – Portfolio" />
      <meta
        property="og:description"
        content="I’m Toan Le, a developer & cyber buff. Learn more and get in touch!"
      />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Plausible Analytics */}
      <script
        async
        defer
        data-domain="toanle1.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </>
  );
}
