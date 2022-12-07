import Head from "next/head";
import HeaderBanner from "../components/HeaderBanner";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import BannerCarousel from "../components/BannerCarousel";
import UspStrip from "../components/UspStrip";
import Bestsellers from "../components/Bestsellers";
import ShopBrands from "../components/ShopBrands";
import ShopBy from "../components/ShopBy";
import NewArrivals from "../components/NewArrivals";
import Offers from "../components/Offers";
import Blogs from "../components/Blogs";
import OptionCatalogue from "../components/Options";
import Footer from "../components/Footer";

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
      <ShopBy />
      <NewArrivals />
      <Offers />
      <Blogs />
      <OptionCatalogue />
      <Footer />
    </>
  );
}
