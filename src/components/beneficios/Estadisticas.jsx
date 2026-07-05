import {
    FaUsers,
    FaClipboardCheck,
    FaUserMd,
    FaSmileBeam
} from "react-icons/fa";

const estadisticas = [
    {
        icono: <FaUsers />,
        numero: "1,500+",
        titulo: "Pacientes registrados",
        descripcion:
            "Usuarios que utilizan la plataforma para realizar el seguimiento de su tratamiento.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icono: <FaClipboardCheck />,
        numero: "8,000+",
        titulo: "Rutinas completadas",
        descripcion:
            "Ejercicios realizados correctamente durante los procesos de rehabilitación.",
        color: "bg-green-100 text-green-600"
    },
    {
        icono: <FaUserMd />,
        numero: "60+",
        titulo: "Especialistas",
        descripcion:
            "Fisioterapeutas que utilizan la plataforma para monitorear a sus pacientes.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        icono: <FaSmileBeam />,
        numero: "98%",
        titulo: "Satisfacción",
        descripcion:
            "Pacientes satisfechos con el seguimiento y organización del tratamiento.",
        color: "bg-yellow-100 text-yellow-600"
    }
];

export default function Estadisticas() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Resultados
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-slate-800">
                        Una plataforma pensada para generar resultados
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                        Cada herramienta de PhysioTrack está orientada a mejorar
                        la comunicación entre pacientes y fisioterapeutas,
                        facilitando un tratamiento más organizado.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
                    {estadisticas.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl ${item.color}`}>
                                {item.icono}
                            </div>
                            <h3 className="mt-8 text-5xl font-bold text-blue-600">
                                {item.numero}
                            </h3>
                            <h4 className="mt-5 text-xl font-semibold text-slate-800">
                                {item.titulo}
                            </h4>
                            <p className="mt-4 text-slate-600 leading-7">
                                {item.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}