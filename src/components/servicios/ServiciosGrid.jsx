import {
    FaClipboardCheck,
    FaHeartbeat,
    FaChartLine,
    FaCalendarAlt,
    FaBell,
    FaFileMedical
} from "react-icons/fa";

const servicios = [
    {
        icono: <FaClipboardCheck size={32} />,
        titulo: "Rutinas Personalizadas",
        descripcion:
            "Cada paciente recibe ejercicios adaptados a su diagnóstico y etapa de recuperación.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icono: <FaHeartbeat size={32} />,
        titulo: "Registro del Dolor",
        descripcion:
            "Registra diariamente tu nivel de dolor utilizando la Escala EVA para monitorear tu evolución.",
        color: "bg-red-100 text-red-500"
    },
    {
        icono: <FaChartLine size={32} />,
        titulo: "Seguimiento Clínico",
        descripcion:
            "Visualiza el progreso de tu tratamiento mediante indicadores y gráficos fáciles de interpretar.",
        color: "bg-green-100 text-green-600"
    },
    {
        icono: <FaCalendarAlt size={32} />,
        titulo: "Calendario Inteligente",
        descripcion:
            "Consulta tus próximas sesiones, evaluaciones y ejercicios desde un solo lugar.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        icono: <FaBell size={32} />,
        titulo: "Recordatorios",
        descripcion:
            "Recibe notificaciones para no olvidar tus ejercicios o próximas citas médicas.",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icono: <FaFileMedical size={32} />,
        titulo: "Historial Médico",
        descripcion:
            "Accede a la evolución de tu tratamiento y consulta registros anteriores cuando lo necesites.",
        color: "bg-purple-100 text-purple-600"
    }
];

export default function ServiciosGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-widest">
                        Nuestros servicios
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-800">
                        Todo lo necesario para acompañarte durante tu recuperación
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        PhysioTrack integra herramientas diseñadas para mejorar
                        la comunicación entre paciente y fisioterapeuta,
                        facilitando el seguimiento del tratamiento.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${servicio.color}`}>
                                {servicio.icono}
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                                {servicio.titulo}
                            </h3>

                            <p className="mt-5 leading-7 text-slate-600">
                                {servicio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}