import {
    FaClock,
    FaMobileAlt,
    FaUserMd,
    FaHeartbeat,
    FaChartLine,
    FaShieldAlt
} from "react-icons/fa";

const beneficios = [
    {
        icono: <FaClock size={30} />,
        titulo: "Ahorra tiempo",
        descripcion:
            "Consulta tu rutina, progreso y próximas sesiones desde un solo lugar.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icono: <FaMobileAlt size={30} />,
        titulo: "Acceso desde cualquier lugar",
        descripcion:
            "Utiliza la plataforma desde tu computadora, tablet o teléfono móvil.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        icono: <FaUserMd size={30} />,
        titulo: "Seguimiento profesional",
        descripcion:
            "Tu fisioterapeuta puede monitorear tu evolución y ajustar el tratamiento.",
        color: "bg-green-100 text-green-600"
    },
    {
        icono: <FaHeartbeat size={30} />,
        titulo: "Control del dolor",
        descripcion:
            "Registra diariamente tu nivel de dolor mediante la Escala EVA.",
        color: "bg-red-100 text-red-500"
    },
    {
        icono: <FaChartLine size={30} />,
        titulo: "Visualiza tu progreso",
        descripcion:
            "Observa la evolución de tu tratamiento con indicadores claros.",
        color: "bg-orange-100 text-orange-500"
    },
    {
        icono: <FaShieldAlt size={30} />,
        titulo: "Información segura",
        descripcion:
            "Tus datos permanecen organizados y disponibles cuando los necesites.",
        color: "bg-purple-100 text-purple-600"
    }
];

export default function BeneficiosGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        ¿Por qué elegir PhysioTrack?
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-slate-800">
                        Beneficios que mejoran tu experiencia durante la recuperación
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        Nuestra plataforma está diseñada para ofrecer una experiencia
                        intuitiva, organizada y enfocada en mejorar el seguimiento
                        del tratamiento fisioterapéutico.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
                    {beneficios.map((beneficio, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${beneficio.color}`}>
                                {beneficio.icono}
                            </div>
                            <h3 className="mt-8 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                                {beneficio.titulo}
                            </h3>
                            <p className="mt-5 text-slate-600 leading-7">
                                {beneficio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}