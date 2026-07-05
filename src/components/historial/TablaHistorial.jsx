import {
    FaEye,
    FaCheckCircle,
    FaClock
} from "react-icons/fa";

export default function TablaHistorial() {

    const historial = [

        {
            fecha: "01 Jul 2026",
            rutina: "Hombro - Fase II",
            eva: "5/10",
            estado: "Completada"
        },

        {
            fecha: "03 Jul 2026",
            rutina: "Movilidad articular",
            eva: "4/10",
            estado: "Completada"
        },

        {
            fecha: "05 Jul 2026",
            rutina: "Fortalecimiento",
            eva: "3/10",
            estado: "Completada"
        },

        {
            fecha: "07 Jul 2026",
            rutina: "Evaluación funcional",
            eva: "2/10",
            estado: "Pendiente"
        }

    ];

    return (
        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Historial de sesiones
                    </h2>
                    <p className="text-slate-500 mt-1">
                        Registro completo de tus tratamientos.
                    </p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-medium">
                    {historial.length} sesiones
                </span>
            </div>

            <div>
                {historial.map((item, index) => (
                    <div
                        key={index}
                        className="px-8 py-5 border-b last:border-b-0 border-slate-100 hover:bg-slate-50 transition"
                    >
                        <div className="grid grid-cols-5 items-center">
                            <div>
                                <p className="text-xs text-slate-500">
                                    Fecha
                                </p>
                                <p className="font-semibold">
                                    {item.fecha}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    Rutina
                                </p>

                                <p className="font-medium">
                                    {item.rutina}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    EVA
                                </p>
                                <p className="font-bold text-blue-600">
                                    {item.eva}
                                </p>
                            </div>

                            <div>
                                {
                                    item.estado === "Completada"
                                        ?
                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                                            <FaCheckCircle />
                                            Completada
                                        </span>
                                        :
                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">

                                            <FaClock />

                                            Pendiente
                                        </span>
                                }
                            </div>

                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-xl flex items-center gap-2"
                                >
                                    <FaEye />
                                    Ver
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}