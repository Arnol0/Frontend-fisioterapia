import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaPlayCircle,
    FaHeartbeat,
    FaCheckCircle,
    FaCalendarAlt,
    FaChartLine,
    FaDumbbell,
    FaUserMd,
    FaBell
} from "react-icons/fa";

export default function HeroHome() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-36 pb-28">
            <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-[350px] h-[350px] bg-sky-200/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                        <FaHeartbeat />
                        Plataforma inteligente para fisioterapia
                    </span>

                    <h1 className="mt-8 text-6xl font-bold leading-tight text-slate-800">
                        Tu recuperación,
                        <br />
                        más organizada
                        <br />
                        y siempre contigo.
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-slate-600">
                        PhysioTrack ayuda a pacientes y fisioterapeutas
                        a gestionar tratamientos, realizar seguimiento
                        del progreso y mantener una comunicación constante
                        durante todo el proceso de rehabilitación.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg"
                        >
                            Comenzar ahora
                            <FaArrowRight />
                        </Link>

                        <Link
                            to="/servicios"
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition px-8 py-4 rounded-2xl font-semibold flex items-center gap-3"
                        >
                            <FaPlayCircle />
                            Explorar servicios
                        </Link>
                    </div>

                    <div className="mt-12 grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-slate-600">
                                Seguimiento personalizado
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-slate-600">
                                Rutinas digitales
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-slate-600">
                                Calendario inteligente
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-slate-600">
                                Historial clínico
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[650px] hidden lg:block">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `
                linear-gradient(#dbeafe 1px, transparent 1px),
                linear-gradient(90deg,#dbeafe 1px, transparent 1px)
            `,
                            backgroundSize: "55px 55px"
                        }}
                    ></div>

                    <div className="absolute top-8 left-10 w-56 h-56 rounded-full bg-blue-300/30 blur-3xl"></div>
                    <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
                    <div className="absolute top-56 right-28 w-40 h-40 rounded-full bg-indigo-300/20 blur-2xl"></div>

                    <div className="absolute top-16 left-20 bg-white rounded-3xl shadow-2xl border border-slate-200 w-72 p-7">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <FaHeartbeat
                                className="text-blue-600"
                                size={26}
                            />
                        </div>

                        <h3 className="mt-5 text-xl font-bold">
                            Recuperación inteligente
                        </h3>

                        <p className="mt-3 text-slate-500 leading-7">
                            Toda tu información organizada
                            en una sola plataforma.
                        </p>
                    </div>

                    <div className="absolute top-72 left-0 bg-white rounded-3xl shadow-xl border border-slate-200 w-60 p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                                <FaCalendarAlt className="text-cyan-600" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Calendario
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Organiza tus sesiones
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-12 right-4 bg-white rounded-3xl shadow-xl border border-slate-200 w-60 p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <FaChartLine className="text-green-600" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Seguimiento
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Visualiza tu progreso
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 right-16 bg-white rounded-3xl shadow-xl border border-slate-200 w-64 p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                <FaDumbbell className="text-orange-500" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Rutinas
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Ejercicios personalizados
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-64 right-24 w-16 h-16 rounded-full bg-blue-600 shadow-xl flex items-center justify-center text-white">
                        <FaUserMd size={28} />
                    </div>

                    <div className="absolute top-40 left-80 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center">
                        <FaBell
                            className="text-yellow-500"
                            size={22}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}