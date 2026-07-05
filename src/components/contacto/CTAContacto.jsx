import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaComments
} from "react-icons/fa";

export default function CTAContacto() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 shadow-2xl">

                    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10"></div>
                    <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-white/10"></div>
                    <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">

                        <div className="text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                                <FaComments size={30} />
                            </div>

                            <h2 className="mt-8 text-5xl font-bold leading-tight">
                                ¿Necesitas ayuda?
                                <br />
                                Estamos para apoyarte.
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-blue-100">
                                Nuestro equipo responderá tus consultas lo antes posible.
                                Si deseas comenzar tu tratamiento, crea una cuenta y
                                descubre todas las herramientas que PhysioTrack tiene
                                para ti.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 lg:items-end">
                            <Link
                                to="/register"
                                className="w-full lg:w-80 bg-white text-blue-700 hover:bg-slate-100 transition py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg"
                            >
                                Crear una cuenta
                                <FaArrowRight />
                            </Link>

                            <Link
                                to="/servicios"
                                className="w-full lg:w-80 border-2 border-white text-white hover:bg-white/10 transition py-4 rounded-2xl font-semibold flex items-center justify-center"
                            >
                                Explorar servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}