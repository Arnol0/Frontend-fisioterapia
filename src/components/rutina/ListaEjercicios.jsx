import {
    FaPlayCircle,
    FaCheckCircle,
    FaClock,
    FaRedoAlt,
    FaDumbbell
} from "react-icons/fa";

export default function ListaEjercicios() {
    const ejercicios = [
        {
            id: 1,
            nombre: "Elevación de hombro asistida",
            series: "3 series",
            repeticiones: "12 repeticiones",
            tiempo: "2 min",
            estado: "Pendiente"
        },
        {
            id: 2,
            nombre: "Rotación externa con banda",
            series: "3 series",
            repeticiones: "15 repeticiones",
            tiempo: "3 min",
            estado: "Completado"
        },
        {
            id: 3,
            nombre: "Abducción de hombro",
            series: "2 series",
            repeticiones: "10 repeticiones",
            tiempo: "2 min",
            estado: "Pendiente"
        },
        {
            id: 4,
            nombre: "Flexión con bastón",
            series: "3 series",
            repeticiones: "10 repeticiones",
            tiempo: "4 min",
            estado: "Pendiente"
        }
    ];

    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                        Ejercicios de hoy
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Completa cada actividad para continuar con tu tratamiento.
                    </p>
                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-medium">
                    4 ejercicios
                </span>
            </div>

            <div className="space-y-5">
                {ejercicios.map((ejercicio) => (
                    <div
                        key={ejercicio.id}
                        className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <FaDumbbell
                                        className="text-blue-600 text-xl"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        {ejercicio.nombre}
                                    </h3>

                                    <div className="flex gap-6 mt-4 text-slate-500 text-sm">
                                        <span className="flex items-center gap-2">
                                            <FaRedoAlt />
                                            {ejercicio.series}
                                        </span>

                                        <span>
                                            {ejercicio.repeticiones}
                                        </span>

                                        <span className="flex items-center gap-2">
                                            <FaClock />
                                            {ejercicio.tiempo}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                {ejercicio.estado === "Completado" ? (
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                        <FaCheckCircle />
                                        Completado
                                    </span>
                                ) : (
                                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                                        Pendiente
                                    </span>
                                )}

                                <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
                                    <FaPlayCircle />
                                    Ver video
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}