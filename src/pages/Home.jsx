import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import HeroHome from "../components/home/HeroHome";
import CaracteristicasHome from "../components/home/CaracteristicasHome";
import EstadisticasHome from "../components/home/EstadisticasHome";
import CTAHome from "../components/home/CTAHome";

export default function Home() {

    return (

        <>

            <Header />

            <main>

                <HeroHome />

                <CaracteristicasHome />

                <EstadisticasHome />

                <CTAHome />

            </main>

            <Footer />

        </>

    );

}