import {
    FaCheckCircle,
    FaRegCircle,
    FaArrowRight
} from "react-icons/fa";

export default function RutinasCard() {
    return (
        <div className="bg-white rounded-[30px] shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">
                        Rutina de hoy
                    </h2>
                    <p className="text-blue-100">
                        Rehabilitación de hombro
                    </p>
                </div>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                    Día 17
                </span>

            </div>

            <div className="p-8">
                <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span>
                            Avance diario
                        </span>
                        <span>
                            25%
                        </span>
                    </div>

                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-blue-600 rounded-full"></div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500"/>
                            <span>
                                Elevación de hombro
                            </span>

                        </div>
                        <span className="text-green-600 font-semibold">
                            Completado
                        </span>

                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <FaRegCircle className="text-slate-400"/>
                            <span>
                                Rotación externa
                            </span>
                        </div>

                        <span className="text-slate-500">
                            Pendiente
                        </span>

                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <FaRegCircle className="text-slate-400"/>
                            <span>
                                Rotación interna
                            </span>
                        </div>
                        <span className="text-slate-500">
                            Pendiente
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <FaRegCircle className="text-slate-400"/>
                            <span>
                                Flexión con banda
                            </span>
                        </div>
                        <span className="text-slate-500">
                            Pendiente
                        </span>
                    </div>

                </div>

                <div className="mt-8 bg-blue-50 rounded-2xl p-5">
                    <h3 className="font-semibold text-blue-700">
                        Objetivo del día
                    </h3>

                    <p className="text-slate-600 mt-2">
                        Recuperar la movilidad del hombro y reducir el dolor durante los movimientos cotidianos.
                    </p>
                </div>
                <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
                    Comenzar rutina
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    );
}