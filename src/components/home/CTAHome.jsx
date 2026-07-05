import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaSignInAlt,
    FaHeartbeat
} from "react-icons/fa";

export default function CTAHome() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 shadow-2xl">
                    <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10"></div>

                    <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full bg-white/10"></div>

                    <div className="relative px-10 py-16 lg:px-20 lg:py-20">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <div className="mx-auto w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
                                <FaHeartbeat size={36} />
                            </div>

                            <h2 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight">
                                Comienza hoy
                                <br />
                                tu recuperación.
                            </h2>

                            <p className="mt-8 text-xl leading-9 text-blue-100">
                                Organiza tus ejercicios, consulta tus sesiones,
                                registra tu progreso y mantente siempre conectado
                                con tu fisioterapeuta desde cualquier dispositivo.
                            </p>

                            <div className="mt-12 flex flex-wrap justify-center gap-5">
                                <Link
                                    to="/register"
                                    className="bg-white hover:bg-slate-100 text-blue-700 px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-xl transition"
                                >
                                    Crear cuenta
                                    <FaArrowRight />
                                </Link>

                                <Link
                                    to="/login"
                                    className="border-2 border-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 transition"
                                >
                                    <FaSignInAlt />
                                    Iniciar sesión
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mt-16">
                                <div>
                                    <h3 className="text-4xl font-bold">
                                        1500+
                                    </h3>

                                    <p className="mt-2 text-blue-100">
                                        Pacientes registrados
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold">
                                        8000+
                                    </h3>

                                    <p className="mt-2 text-blue-100">
                                        Rutinas completadas
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold">
                                        98%
                                    </h3>

                                    <p className="mt-2 text-blue-100">
                                        Satisfacción
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}