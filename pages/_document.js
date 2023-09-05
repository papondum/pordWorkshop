import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&family=Inter&family=Lato:wght@700&family=Manrope:wght@200;600&family=Open+Sans&family=Poppins:wght@500&family=Roboto&family=Volkhov:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div
          style={{
            padding: "8px 24px",
            display: "flex",
            position: "absolute",
            gap: 36,
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/1_hiw">Card layout</Link>
          <Link href="/2_features">Card layout2</Link>
          <Link href="/3_success">Card layout3</Link>
          <Link href="/4_about">Card animate</Link>
          <Link href="/5_footer">Menu</Link>
          <Link href="/6_lense">Content img</Link>
          <Link href="/7_getstart">IMG Bg</Link>
          <Link href="/8_newsletter">Chat</Link>
          <Link href="/8_product">Uncertain</Link>
          <Link href="/9_conceptual">::</Link>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
