import Head from "next/head";
import HeaderBanner from "./headerBanner/headerBanner";
import Header from "./header/header";
import HeaderMenu from "./headerMenu/headerMenu";
import UspStrip from "./uspStrip/uspStrip";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamilton</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBanner />
      <Header />
      <HeaderMenu />
      <UspStrip />
    </>
  );
}
