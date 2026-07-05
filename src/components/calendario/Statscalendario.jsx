import {
    FaCalendarAlt,
    FaRunning,
    FaFire
} from "react-icons/fa";

export default function StatsCalendario() {

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-slate-500">
                            Sesiones
                        </p>
                        <h2 className="text-4xl font-bold text-slate-800 mt-2">
                            5
                        </h2>
                        <span className="text-sm text-slate-400">
                            Esta semana
                        </span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <FaCalendarAlt
                            className="text-blue-600 text-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-slate-500">
                            Rutinas
                        </p>
                        <h2 className="text-4xl font-bold text-slate-800 mt-2">
                            12
                        </h2>
                        <span className="text-sm text-slate-400">
                            Completadas
                        </span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                        <FaRunning
                            className="text-green-600 text-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-slate-500">
                            Racha
                        </p>
                        <h2 className="text-4xl font-bold text-slate-800 mt-2">
                            18
                        </h2>
                        <span className="text-sm text-slate-400">
                            Días seguidos
                        </span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                        <FaFire
                            className="text-orange-500 text-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}