import {
    FaUserPlus,
    FaClipboardList,
    FaDumbbell,
    FaChartLine
} from "react-icons/fa";

const pasos = [
    {
        icono: <FaUserPlus />,
        titulo: "1. Regístrate",
        descripcion:
            "Crea tu cuenta e inicia sesión para acceder a la plataforma."
    },
    {
        icono: <FaClipboardList />,
        titulo: "2. Recibe tu plan",
        descripcion:
            "El fisioterapeuta asignará una rutina personalizada según tu diagnóstico."
    },
    {
        icono: <FaDumbbell />,
        titulo: "3. Realiza tus ejercicios",
        descripcion:
            "Completa diariamente las actividades y registra tu nivel de dolor."
    },
    {
        icono: <FaChartLine />,
        titulo: "4. Visualiza tu progreso",
        descripcion:
            "Consulta tu evolución mediante indicadores y el historial clínico."
    }
];

export default function ProcesoTrabajo() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Cómo funciona
                    </span>

                    <h2 className="text-4xl font-bold text-slate-800 mt-4">
                        Tu recuperación paso a paso
                    </h2>

                    <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
                        PhysioTrack facilita todo el proceso de rehabilitación,
                        desde la asignación de ejercicios hasta el seguimiento
                        continuo de tu evolución.
                    </p>
                </div>

                <div className="relative mt-20">
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-blue-100"></div>

                    <div className="grid lg:grid-cols-4 gap-10">
                        {pasos.map((paso, index) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-white shadow-lg border-4 border-blue-100 flex items-center justify-center text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300 z-10">
                                    {paso.icono}
                                </div>

                                <div className="mt-8 w-full min-h-[240px] bg-white rounded-3xl shadow-md border border-slate-200 p-6 flex flex-col group-hover:-translate-y-2 group-hover:shadow-xl transition duration-300">
                                    <h3 className="text-xl font-bold text-slate-800 text-center">
                                        {paso.titulo}
                                    </h3>

                                    <p className="mt-5 text-slate-600 leading-7 text-center flex-1">
                                        {paso.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}