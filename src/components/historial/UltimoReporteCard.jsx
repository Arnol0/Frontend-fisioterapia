import {
    FaUserMd,
    FaHeartbeat,
    FaWalking,
    FaClipboardCheck,
    FaCalendarAlt
} from "react-icons/fa";

export default function UltimoReporteCard() {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden h-full">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h2 className="text-2xl font-bold">
                    Último reporte
                </h2>
                <p className="text-blue-100 mt-1">
                    Información registrada recientemente.
                </p>
            </div>

            <div className="p-6 space-y-5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-600"/>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">
                            Fecha
                        </p>
                        <h3 className="font-semibold text-slate-700">
                            05 Julio 2026
                        </h3>
                    </div>

                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                        <FaHeartbeat className="text-red-500"/>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Escala EVA
                        </p>

                        <h3 className="font-semibold text-slate-700">
                            2 / 10
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <FaWalking className="text-green-600"/>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Movilidad
                        </p>

                        <h3 className="font-semibold text-slate-700">
                            Buena
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <FaClipboardCheck className="text-orange-500"/>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Estado
                        </p>
                        <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            En progreso
                        </span>
                    </div>
                </div>

                <div className="border-t pt-5">
                    <div className="flex items-center gap-3">
                        <FaUserMd className="text-blue-600"/>
                        <div>
                            <p className="text-xs text-slate-500">
                                Fisioterapeuta
                            </p>
                            <h3 className="font-semibold text-slate-700">
                                Dra. Nicol Mendoza
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}