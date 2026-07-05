import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaHeartbeat
} from "react-icons/fa";

export default function CTABeneficios() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 shadow-2xl">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full"></div>
                    <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
                        <div className="text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                                <FaHeartbeat
                                    size={30}
                                />
                            </div>
                            <h2 className="mt-8 text-5xl font-bold leading-tight">
                                Tu recuperación
                                <br />
                                comienza hoy.
                            </h2>
                            <p className="mt-8 text-lg leading-8 text-blue-100">
                                Organiza tus ejercicios, registra tu evolución y
                                mantente conectado con tu fisioterapeuta desde
                                cualquier lugar.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 lg:items-end">
                            <Link
                                to="/register"
                                className="w-full lg:w-80 bg-white text-blue-700 hover:bg-slate-100 transition py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg"
                            >
                                Crear cuenta gratuita
                                <FaArrowRight />
                            </Link>

                            <Link
                                to="/servicios"
                                className="w-full lg:w-80 border-2 border-white text-white hover:bg-white/10 transition py-4 rounded-2xl font-semibold flex items-center justify-center"
                            >
                                Ver todos los servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}