import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import HeroContacto from "../components/contacto/HeroContacto";
import InformacionContacto from "../components/contacto/InformacionContacto";
import FormularioContacto from "../components/contacto/FormularioContacto";
import CTAContacto from "../components/contacto/CTAContacto";

export default function Contacto() {

    return (

        <>
            <Header />

            <main>

                <HeroContacto />

                <InformacionContacto />

                <FormularioContacto />

                <CTAContacto />

            </main>

            <Footer />

        </>

    );

}