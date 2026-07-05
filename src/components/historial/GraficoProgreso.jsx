import {
    FaChartLine,
    FaArrowUp
} from "react-icons/fa";

export default function GraficoProgreso() {
    const datos = [7, 6, 6, 5, 4, 4, 3, 2];
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Evolución del dolor
                    </h2>
                    <p className="text-slate-500 mt-1">
                        Escala EVA registrada durante el tratamiento.
                    </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <FaChartLine className="text-blue-600 text-2xl"/>
                </div>

            </div>

            <div className="flex items-end justify-between h-64 border-b border-l border-slate-200 px-4">
                {datos.map((valor, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-3"
                    >
                        <div
                            className="w-10 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 transition hover:scale-105"
                            style={{
                                height: `${valor * 28}px`
                            }}
                        ></div>
                        <span className="text-xs text-slate-500">
                            S{index + 1}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
                <div>
                    <p className="text-slate-500">
                        Tendencia general
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <FaArrowUp className="text-green-600 rotate-45"/>
                        <span className="text-green-600 font-semibold">
                            Mejorando progresivamente
                        </span>
                    </div>
                </div>

                <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
                    ↓ Dolor reducido 71%
                </div>
            </div>
        </div>
    );
}