import { FaEnvelopeOpenText } from "react-icons/fa";

export default function HeroContacto() {
    return (
        <section className="pt-36 pb-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="max-w-7xl mx-auto px-8 text-center">
                <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
                    <FaEnvelopeOpenText />
                    Contáctanos
                </div>

                <h1 className="mt-8 text-5xl font-bold text-slate-800">
                    Estamos aquí para ayudarte.
                </h1>

                <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                    ¿Tienes dudas sobre la plataforma o deseas más información?
                    Nuestro equipo estará encantado de responder todas tus consultas.
                </p>
            </div>
        </section>
    );
}