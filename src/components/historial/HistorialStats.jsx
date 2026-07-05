import {
    FaClipboardCheck,
    FaHeartbeat,
    FaCalendarCheck,
    FaChartLine
} from "react-icons/fa";

export default function HistorialStats() {
    return (
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
                <div className="flex justify-between">
                    <div>
                        <p className="text-slate-500">
                            Rutinas completadas
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            18
                        </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <FaClipboardCheck className="text-blue-600 text-2xl"/>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
                <div className="flex justify-between">
                    <div>
                        <p className="text-slate-500">
                            Dolor promedio
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            3.2
                        </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                        <FaHeartbeat className="text-red-500 text-2xl"/>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
                <div className="flex justify-between">
                    <div>
                        <p className="text-slate-500">
                            Asistencia
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            95%
                        </h2>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                        <FaCalendarCheck className="text-green-600 text-2xl"/>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
                <div className="flex justify-between">
                    <div>
                        <p className="text-slate-500">
                            Progreso
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            82%
                        </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                        <FaChartLine className="text-cyan-600 text-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
}