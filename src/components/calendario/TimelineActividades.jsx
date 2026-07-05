import {
    FaRunning,
    FaHeartbeat,
    FaUserMd
} from "react-icons/fa";

export default function TimelineActividades({

    fechaSeleccionada

}) {

    const fecha = fechaSeleccionada.toLocaleDateString(
        "es-PE",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">
                    Actividades del {fecha}
                </h2>

                <p className="text-slate-500 mt-2">
                    Estas son las actividades programadas para el día seleccionado.
                </p>

            </div>

            <div className="relative ml-5">
                <div className="absolute left-3 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>

                <div className="relative flex gap-6 pb-10">
                    <div className="z-10 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                        <FaRunning className="text-white text-sm"/>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-slate-800">
                                Rutina de hombro
                            </h3>

                            <span className="text-slate-500 text-sm">
                                09:00 AM
                            </span>
                        </div>

                        <p className="text-slate-500 mt-1">
                            Ejercicios terapéuticos • 40 minutos
                        </p>
                    </div>
                </div>

                <div className="relative flex gap-6 pb-10">
                    <div className="z-10 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <FaHeartbeat className="text-white text-sm"/>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-slate-800">
                                Evaluación EVA
                            </h3>
                            <span className="text-slate-500 text-sm">
                                10:00 AM
                            </span>
                        </div>

                        <p className="text-slate-500 mt-1">
                            Registro del nivel de dolor del paciente.
                        </p>
                    </div>
                </div>

                <div className="relative flex gap-6">
                    <div className="z-10 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                        <FaUserMd className="text-white text-sm"/>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-slate-800">
                                Consulta médica
                            </h3>

                            <span className="text-slate-500 text-sm">
                                11:00 AM
                            </span>
                        </div>

                        <p className="text-slate-500 mt-1">
                            Seguimiento con el fisioterapeuta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}