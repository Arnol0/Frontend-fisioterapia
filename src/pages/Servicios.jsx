import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import HeroServicios from "../components/servicios/HeroServicios";
import ServiciosGrid from "../components/servicios/ServiciosGrid";
import ProcesoTrabajo from "../components/servicios/ProcesoTrabajo";
import CTAServicios from "../components/servicios/CTAServicios";

export default function Servicios() {

    return (

        <>
            <Header />

            <main>

                <HeroServicios />

                <ServiciosGrid />

                <ProcesoTrabajo />

                <CTAServicios />

            </main>

            <Footer />

        </>

    );

}