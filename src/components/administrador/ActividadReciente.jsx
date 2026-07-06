import {
    FaCheckCircle,
    FaHeartbeat,
    FaCalendarCheck,
    FaClipboardList
} from "react-icons/fa";

const actividades = [

    {
        icono: <FaCheckCircle />,
        titulo: "Rutina completada",
        descripcion: "Carlos Mendoza terminó su rutina de rehabilitación.",
        tiempo: "Hace 10 min",
        color: "bg-green-100 text-green-600"
    },

    {
        icono: <FaHeartbeat />,
        titulo: "Registro EVA",
        descripcion: "María Torres registró un dolor EVA 6.",
        tiempo: "Hace 25 min",
        color: "bg-red-100 text-red-600"
    },

    {
        icono: <FaCalendarCheck />,
        titulo: "Cita confirmada",
        descripcion: "Juan Pérez confirmó su sesión de mañana.",
        tiempo: "Hace 1 hora",
        color: "bg-blue-100 text-blue-600"
    },

    {
        icono: <FaClipboardList />,
        titulo: "Nueva rutina",
        descripcion: "Se asignó una nueva rutina a Ana Gómez.",
        tiempo: "Hace 3 horas",
        color: "bg-violet-100 text-violet-600"
    }

];

export default function ActividadReciente() {

    return (

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

            <h2 className="text-xl font-bold text-slate-800">

                Actividad reciente

            </h2>

            <p className="text-slate-500 mt-2">

                Últimos movimientos registrados en la plataforma.

            </p>

            <div className="mt-8 space-y-6">

                {

                    actividades.map((actividad, index) => (

                        <div
                            key={index}
                            className="flex gap-4"
                        >

                            <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${actividad.color}`}
                            >

                                {actividad.icono}

                            </div>

                            <div className="flex-1">

                                <h3 className="font-semibold text-slate-800">

                                    {actividad.titulo}

                                </h3>

                                <p className="text-sm text-slate-500 mt-1 leading-6">

                                    {actividad.descripcion}

                                </p>

                                <span className="text-xs text-slate-400">

                                    {actividad.tiempo}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}