import {
    FaCalendarAlt,
    FaClock,
    FaUserMd,
    FaDumbbell,
    FaArrowRight
} from "react-icons/fa";

export default function ProximaSesionCard({
    fechaSeleccionada
}) {

    const fecha = fechaSeleccionada.toLocaleDateString(
        "es-PE",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <p className="text-sm opacity-80">
                    Próxima sesión
                </p>
                <h2 className="text-2xl font-bold mt-1">
                    Rehabilitación
                </h2>
            </div>

            <div className="p-6 space-y-5">
                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">
                            Fecha
                        </p>
                        <p className="font-semibold text-slate-700">
                            {fecha}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                        <FaClock className="text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">
                            Hora
                        </p>
                        <p className="font-semibold text-slate-700">
                            09:00 AM
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center">
                        <FaUserMd className="text-cyan-600" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">
                            Especialista
                        </p>
                        <p className="font-semibold text-slate-700">
                            Dra. Nicol Mendoza
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                        <FaDumbbell className="text-orange-500" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">
                            Tratamiento
                        </p>

                        <p className="font-semibold text-slate-700">
                            Rehabilitación de hombro
                        </p>
                    </div>
                </div>

                <div className="border-t pt-5">
                    <div className="flex justify-between">
                        <span className="text-slate-500">
                            Duración
                        </span>
                        <span className="font-semibold">
                            40 min
                        </span>
                    </div>

                    <div className="flex justify-between mt-3">
                        <span className="text-slate-500">
                            Estado
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            Confirmada
                        </span>
                    </div>
                </div>

                <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    Ver rutina
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}