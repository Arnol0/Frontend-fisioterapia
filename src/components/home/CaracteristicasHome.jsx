import {
    FaClipboardCheck,
    FaHeartbeat,
    FaCalendarAlt,
    FaChartLine,
    FaBell,
    FaUserMd
} from "react-icons/fa";

const caracteristicas = [
    {
        icono: <FaClipboardCheck size={30} />,
        titulo: "Rutinas Personalizadas",
        descripcion:
            "Ejercicios adaptados a cada etapa de tu tratamiento.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icono: <FaHeartbeat size={30} />,
        titulo: "Registro EVA",
        descripcion:
            "Controla diariamente tu nivel de dolor de forma sencilla.",
        color: "bg-red-100 text-red-500"
    },
    {
        icono: <FaCalendarAlt size={30} />,
        titulo: "Calendario Inteligente",
        descripcion:
            "Consulta tus próximas sesiones y actividades programadas.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        icono: <FaChartLine size={30} />,
        titulo: "Seguimiento Clínico",
        descripcion:
            "Visualiza el progreso de tu recuperación en tiempo real.",
        color: "bg-green-100 text-green-600"
    },
    {
        icono: <FaBell size={30} />,
        titulo: "Recordatorios",
        descripcion:
            "Recibe avisos para no olvidar ejercicios ni citas médicas.",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icono: <FaUserMd size={30} />,
        titulo: "Comunicación",
        descripcion:
            "Mantén el contacto con tu fisioterapeuta durante el tratamiento.",
        color: "bg-purple-100 text-purple-600"
    }
];

export default function CaracteristicasHome() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Características
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-800">
                        Todo lo que necesitas para tu recuperación
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        PhysioTrack reúne en un solo lugar todas las herramientas
                        necesarias para que pacientes y fisioterapeutas trabajen
                        de manera organizada y eficiente.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
                    {caracteristicas.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                                >
                                    {item.icono}
                                </div>

                                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                    Disponible
                                </span>
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                                {item.titulo}
                            </h3>

                            <p className="mt-5 text-slate-600 leading-7">
                                {item.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}