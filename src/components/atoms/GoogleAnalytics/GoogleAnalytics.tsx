import Script from "next/script";

export function NoScriptGA() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_GTM}`}
        height="0"
        width="0"
        className="hidden"
      />
    </noscript>
  );
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          process.env.NEXT_PUBLIC_GA_GTM
        }
      />
      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '');
        `}
      </Script>
      <Script id="google-analytics">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_GTM}');
        `}
      </Script>
    </>
  );
}
