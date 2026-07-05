import {
    FaUserMd,
    FaHeartbeat,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";

export default function ResumenCard() {
    return (
        <div className="bg-white rounded-[30px] shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 flex justify-between items-center">
                <div>
                    <p className="text-blue-100 text-sm">
                        Tratamiento activo
                    </p>
                    <h2 className="text-3xl font-bold mt-1">
                        Rehabilitación de hombro
                    </h2>
                    <p className="text-blue-100 mt-2">
                        Fase II
                    </p>

                </div>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                    ● En progreso
                </span>

            </div>

            <div className="p-8 grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full border-[12px] border-blue-600 flex items-center justify-center shadow-inner">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-slate-800">
                                62%
                            </h2>

                            <p className="text-slate-500 text-sm">
                                Completado
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-slate-500">
                            Día 17 de 30
                        </span>

                        <span className="font-semibold">
                            62%
                        </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                        <div className="bg-blue-600 h-full w-[62%] rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="flex gap-3">
                            <FaUserMd className="text-blue-600 mt-1"/>
                            <div>
                                <p className="text-xs text-slate-500">
                                    Especialista
                                </p>
                                <p className="font-semibold">
                                    Dra. Nicol Mendoza
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <FaHeartbeat className="text-red-500 mt-1"/>
                            <div>
                                <p className="text-xs text-slate-500">
                                    Dolor EVA
                                </p>
                                <p className="font-semibold">
                                    3 / 10
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <FaCalendarAlt className="text-green-600 mt-1"/>
                            <div>
                                <p className="text-xs text-slate-500">
                                    Próxima sesión
                                </p>
                                <p className="font-semibold">
                                    Mañana
                                </p>

                            </div>

                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Duración
                            </p>
                            <p className="font-semibold">
                                30 días
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-slate-200 p-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
                    Continuar rutina
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    );
}