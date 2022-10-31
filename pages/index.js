import Head from "next/head";
import HeaderBanner from "../components/headerBanner/headerBanner";
import Header from "../components/header/header";
import HeaderMenu from "../components/headerMenu/headerMenu";
import BannerCarousel from "../components/bannerCarousel/bannerCarousel";
import UspStrip from "../components/uspStrip/uspStrip";
import Bestsellers from "../components/bestsellers/bestsellers";
import ShopBrands from "../components/shopBrands/shopBrands";
import Offers from "../components/offers/offers";
import OptionCatalogue from "../components/options/options";
import Footer from "../components/footer/footer";

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
      <BannerCarousel />
      <UspStrip />
      <Bestsellers />
      <ShopBrands />
      <Offers />
      <OptionCatalogue />
      <Footer />
    </>
  );
}
