import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaPhoneAlt
} from "react-icons/fa";

export default function CTAServicios() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-[36px] shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-10 items-center p-12 lg:p-16">
                        <div className="text-white">
                            <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-sm font-medium">
                                Empieza hoy mismo
                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight">
                                Da el siguiente paso
                                <br />
                                hacia tu recuperación.
                            </h2>

                            <p className="mt-8 text-blue-100 text-lg leading-8">
                                Únete a PhysioTrack y accede a una plataforma
                                diseñada para acompañarte durante todo tu
                                tratamiento fisioterapéutico.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 lg:items-end">
                            <Link
                                to="/register"
                                className="w-full lg:w-72 bg-white text-blue-700 hover:bg-slate-100 transition rounded-2xl py-4 font-semibold flex items-center justify-center gap-3 shadow-lg"
                            >
                                Crear cuenta
                                <FaArrowRight />
                            </Link>

                            <Link
                                to="/contacto"
                                className="w-full lg:w-72 border-2 border-white text-white hover:bg-white/10 transition rounded-2xl py-4 font-semibold flex items-center justify-center gap-3"
                            >
                                Contactar asesor
                                <FaPhoneAlt />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}