import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaClipboardCheck
} from "react-icons/fa";

export default function HeroServicios() {
    return (
        <section className="pt-36 pb-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
                        <FaClipboardCheck />
                        Plataforma de fisioterapia
                    </span>

                    <h1 className="mt-8 text-5xl font-bold text-slate-800 leading-tight">
                        Servicios diseñados para mejorar
                        tu recuperación física.
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-slate-600">
                        PhysioTrack ofrece herramientas digitales para conectar
                        pacientes y fisioterapeutas, facilitando el seguimiento
                        clínico, las rutinas de rehabilitación y el monitoreo
                        continuo del progreso.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3"
                        >
                            Comenzar ahora
                            <FaArrowRight />
                        </Link>

                        <Link
                            to="/contacto"
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition px-8 py-4 rounded-2xl font-semibold"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-10">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Lo que encontrarás
                        </h2>

                        <div className="mt-8 space-y-5">
                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Rutinas personalizadas
                                </span>

                                <span className="font-semibold text-green-600">
                                    ✓
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Registro del dolor
                                </span>

                                <span className="font-semibold text-green-600">
                                    ✓
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Calendario inteligente
                                </span>

                                <span className="font-semibold text-green-600">
                                    ✓
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Historial clínico
                                </span>

                                <span className="font-semibold text-green-600">
                                    ✓
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Recordatorios automáticos
                                </span>

                                <span className="font-semibold text-green-600">
                                    ✓
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}