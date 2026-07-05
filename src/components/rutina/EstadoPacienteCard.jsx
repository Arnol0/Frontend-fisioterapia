import {
    FaHeartbeat,
    FaWalking,
    FaBatteryHalf,
    FaSave
} from "react-icons/fa";

export default function EstadoPacienteCard() {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Estado del paciente
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Registra cómo te sientes antes de comenzar la rutina.
                    </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <FaHeartbeat
                        className="text-blue-600 text-3xl"
                    />
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700">
                            Nivel de dolor
                        </span>

                        <span className="text-blue-600 font-semibold">
                            3 / 10
                        </span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="10"
                        defaultValue="3"
                        className="w-full accent-blue-600"
                    />
                </div>

                <div>
                    <label className="font-medium text-slate-700 flex items-center gap-2 mb-2">
                        <FaWalking className="text-green-600" />
                        Movilidad
                    </label>

                    <select className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Excelente</option>
                        <option>Buena</option>
                        <option>Regular</option>
                        <option>Limitada</option>
                    </select>
                </div>

                <div>
                    <label className="font-medium text-slate-700 flex items-center gap-2 mb-2">
                        <FaBatteryHalf className="text-orange-500" />
                        Nivel de fatiga
                    </label>

                    <select className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>
            </div>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <FaSave />
                Guardar estado
            </button>
        </div>
    );
}