import {
    FaLightbulb,
    FaGlassWater,
    FaCircleCheck
} from "react-icons/fa6";

export default function ConsejoCard() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 flex justify-between items-center">
                <div className="text-white">
                    <div className="flex items-center gap-3">
                        <FaLightbulb className="text-3xl" />

                        <h2 className="text-2xl font-bold">
                            Consejo del fisioterapeuta
                        </h2>
                    </div>

                    <p className="mt-6 text-blue-100 leading-8 max-w-2xl">
                        Mantén una postura correcta durante todos los ejercicios.
                        Realiza los movimientos lentamente y evita sobrepasar el
                        límite del dolor. Descansa entre 30 y 45 segundos entre
                        series e hidrátate constantemente.
                    </p>

                    <div className="flex gap-8 mt-8">
                        <div className="flex items-center gap-2">
                            <FaGlassWater />

                            <span>
                                Hidratación
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCircleCheck />

                            <span>
                                Descanso recomendado
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center">
                        <FaLightbulb className="text-white text-6xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}