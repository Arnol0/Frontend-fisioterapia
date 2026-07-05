import {
    FaCheckCircle,
    FaArrowRight
} from "react-icons/fa";

export default function BotonFinalizar() {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        ¿Terminaste tu rutina?
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Guarda tu progreso para que tu fisioterapeuta pueda
                        revisar tu evolución.
                    </p>
                </div>

                <button
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg"
                >
                    <FaCheckCircle />
                    Finalizar rutina
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}