import {
    FaArrowRight
} from "react-icons/fa";

export default function WelcomeBannerAdmin() {

    return (

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white overflow-hidden relative">

            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full"></div>

            <div className="absolute right-20 bottom-0 w-40 h-40 bg-white/10 rounded-full"></div>

            <div className="relative">

                <p className="uppercase tracking-widest text-blue-100">

                    Resumen del día

                </p>

                <h2 className="text-4xl font-bold mt-4">

                    Todo está bajo control.

                </h2>

                <p className="mt-5 text-blue-100 max-w-xl leading-8">

                    Hoy tienes 12 sesiones programadas, 6 pacientes requieren
                    atención inmediata y 18 rutinas continúan activas.

                </p>

                <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">

                    Ver agenda

                    <FaArrowRight />

                </button>

            </div>

        </section>

    );

}