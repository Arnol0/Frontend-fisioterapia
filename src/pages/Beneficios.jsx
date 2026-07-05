import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import HeroBeneficios from "../components/beneficios/HeroBeneficios";
import BeneficiosGrid from "../components/beneficios/BeneficiosGrid";
import Estadisticas from "../components/beneficios/Estadisticas";
import CTABeneficios from "../components/beneficios/CTABeneficios";

export default function Beneficios() {

    return (

        <>
            <Header />

            <main>

                <HeroBeneficios />

                <BeneficiosGrid />

                <Estadisticas />

                <CTABeneficios />

            </main>

            <Footer />

        </>

    );

}