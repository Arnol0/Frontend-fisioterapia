import {
    FaEye,
    FaPen,
    FaEllipsisH
} from "react-icons/fa";

const pacientes = [

    {
        nombre: "Carlos Mendoza",
        diagnostico: "Lesión de rodilla",
        eva: 2,
        progreso: 85,
        estado: "Activo"
    },

    {
        nombre: "María Torres",
        diagnostico: "Lumbalgia",
        eva: 5,
        progreso: 63,
        estado: "Seguimiento"
    },

    {
        nombre: "Juan Pérez",
        diagnostico: "Hombro congelado",
        eva: 8,
        progreso: 35,
        estado: "Crítico"
    }

];

export default function TablaPacientes() {

    const colorEstado = (estado) => {

        switch (estado) {

            case "Activo":

                return "bg-green-100 text-green-700";

            case "Seguimiento":

                return "bg-yellow-100 text-yellow-700";

            default:

                return "bg-red-100 text-red-700";

        }

    };

    const colorEva = (eva) => {

        if (eva <= 3)
            return "text-green-600";

        if (eva <= 6)
            return "text-yellow-600";

        return "text-red-600";

    };

    return (

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">

                        Pacientes recientes

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Últimos pacientes atendidos.

                    </p>

                </div>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition">

                    Nuevo paciente

                </button>

            </div>

            <div className="mt-8 space-y-5">

                {

                    pacientes.map((paciente) => (

                        <div

                            key={paciente.nombre}

                            className="border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition"

                        >

                            <div className="flex justify-between">

                                <div className="flex gap-5">

                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex justify-center items-center text-2xl font-bold text-blue-600">

                                        {paciente.nombre.charAt(0)}

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-semibold">

                                            {paciente.nombre}

                                        </h3>

                                        <p className="text-slate-500 mt-1">

                                            {paciente.diagnostico}

                                        </p>

                                        <div className="flex gap-3 mt-4">

                                            <span className={`px-3 py-1 rounded-full text-sm ${colorEstado(paciente.estado)}`}>

                                                {paciente.estado}

                                            </span>

                                            <span className={`font-semibold ${colorEva(paciente.eva)}`}>

                                                EVA {paciente.eva}

                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className="flex gap-3">

                                    <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

                                        <FaEye className="mx-auto"/>

                                    </button>

                                    <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

                                        <FaPen className="mx-auto"/>

                                    </button>

                                    <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

                                        <FaEllipsisH className="mx-auto"/>

                                    </button>

                                </div>

                            </div>

                            <div className="mt-6">

                                <div className="flex justify-between text-sm">

                                    <span>

                                        Recuperación

                                    </span>

                                    <span className="font-semibold">

                                        {paciente.progreso}%

                                    </span>

                                </div>

                                <div className="mt-3 h-3 bg-slate-200 rounded-full overflow-hidden">

                                    <div

                                        className="h-full bg-blue-600 rounded-full"

                                        style={{

                                            width: `${paciente.progreso}%`

                                        }}

                                    />

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}