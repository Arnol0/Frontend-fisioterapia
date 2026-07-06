import {
    FaArrowRight,
    FaCalendarAlt,
    FaHeartbeat
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

export default function HeroDashboard({ patient }) {

    const { usuario } = useAuth();
    
    return (
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-[32px] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
                <div className="p-10 text-white">
                    <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                        👋 Bienvenida de nuevo
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight">
                        Hola, {usuario?.nombre} {usuario?.apellido}
                    </h1>

                    <p className="mt-5 text-blue-100 text-lg leading-8">
                        Continúa con tu tratamiento. Hoy tienes ejercicios
                        pendientes y tu recuperación avanza de forma positiva.
                    </p>

                    <div className="mt-8">
                        <div className="flex justify-between text-sm mb-2">
                            <span>
                                Progreso del tratamiento
                            </span>

                            <span>
                                62%
                            </span>
                        </div>

                        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-[62%] h-full bg-white rounded-full"></div>
                        </div>

                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-white text-blue-700 hover:bg-slate-100 transition px-7 py-4 rounded-2xl font-semibold flex items-center gap-3">
                            Continuar rutina
                            <FaArrowRight />
                        </button>
                    </div>

                </div>

                <div className="hidden lg:flex justify-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-80 border border-white/20">
                        <h2 className="text-white text-2xl font-bold">
                            Resumen de hoy
                        </h2>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <FaCalendarAlt className="text-white"/>
                                </div>

                                <div>
                                    <p className="text-blue-100 text-sm">
                                        Próxima sesión
                                    </p>
                                    <p className="text-white font-semibold">
                                        Mañana · 09:00 AM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <FaHeartbeat className="text-white"/>
                                </div>

                                <div>
                                    <p className="text-blue-100 text-sm">
                                        Dolor registrado
                                    </p>
                                    <p className="text-white font-semibold">
                                        EVA 3 / 10
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