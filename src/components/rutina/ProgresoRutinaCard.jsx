import {
    FaChartLine,
    FaFire,
    FaCheckCircle,
    FaCalendarCheck
} from "react-icons/fa";

export default function ProgresoRutinaCard() {
    const progreso = 65;

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center gap-3">
                    <FaChartLine className="text-3xl" />

                    <div>
                        <h2 className="text-2xl font-bold">
                            Progreso
                        </h2>

                        <p className="text-blue-100 text-sm">
                            Seguimiento de tu recuperación
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-blue-600">
                        {progreso}%
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Tratamiento completado
                    </p>
                </div>

                <div className="mt-6">
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            style={{ width: `${progreso}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-blue-50 rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <FaFire className="text-orange-500 text-xl" />

                            <div>
                                <p className="text-xs text-slate-500">
                                    Racha
                                </p>

                                <h3 className="font-bold text-lg">
                                    12 días
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600 text-xl" />

                            <div>
                                <p className="text-xs text-slate-500">
                                    Completados
                                </p>

                                <h3 className="font-bold text-lg">
                                    4 / 6
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-slate-50 rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                        <FaCalendarCheck className="text-blue-600 text-xl" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Próxima sesión
                            </p>

                            <h3 className="font-semibold text-slate-700">
                                Martes 7 de Julio • 09:00 AM
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}