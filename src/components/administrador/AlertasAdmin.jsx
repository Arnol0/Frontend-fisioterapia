import {
    FaExclamationTriangle,
    FaHeartbeat,
    FaClock,
    FaArrowRight
} from "react-icons/fa";

const alertas = [

    {
        paciente: "Juan Pérez",
        mensaje: "Dolor elevado registrado (EVA 9).",
        prioridad: "Alta",
        tiempo: "Hace 15 min",
        color: "bg-red-100 text-red-600",
        icono: <FaHeartbeat />
    },

    {
        paciente: "María Torres",
        mensaje: "No registra ejercicios desde hace 4 días.",
        prioridad: "Media",
        tiempo: "Hace 2 horas",
        color: "bg-yellow-100 text-yellow-600",
        icono: <FaClock />
    },

    {
        paciente: "Carlos Mendoza",
        mensaje: "Rutina pendiente de aprobación.",
        prioridad: "Baja",
        tiempo: "Hoy",
        color: "bg-blue-100 text-blue-600",
        icono: <FaExclamationTriangle />
    }

];

export default function AlertasAdmin() {

    return (

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">

                        Alertas clínicas

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Pacientes que requieren seguimiento.

                    </p>

                </div>

                <button className="text-blue-600 hover:text-blue-700 transition">

                    <FaArrowRight size={18} />

                </button>

            </div>

            <div className="mt-8 space-y-5">

                {

                    alertas.map((alerta, index) => (

                        <div

                            key={index}

                            className="border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition"

                        >

                            <div className="flex gap-4">

                                <div className={`w-12 h-12 rounded-2xl flex justify-center items-center ${alerta.color}`}>

                                    {alerta.icono}

                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between items-center">

                                        <h3 className="font-semibold text-slate-800">

                                            {alerta.paciente}

                                        </h3>

                                        <span
                                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                                alerta.prioridad === "Alta"
                                                    ? "bg-red-100 text-red-600"
                                                    : alerta.prioridad === "Media"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-blue-100 text-blue-600"
                                            }`}
                                        >

                                            {alerta.prioridad}

                                        </span>

                                    </div>

                                    <p className="text-sm text-slate-500 mt-2 leading-6">

                                        {alerta.mensaje}

                                    </p>

                                    <span className="text-xs text-slate-400 mt-3 block">

                                        {alerta.tiempo}

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

            <button className="mt-6 w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition">

                Ver todas las alertas

            </button>

        </section>

    );

}