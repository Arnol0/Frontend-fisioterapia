import { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

export default function CalendarioWidget({
    fechaSeleccionada,
    setFechaSeleccionada
}) {

    const [fechaActual, setFechaActual] = useState(new Date());

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const diasSemana = [
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sa",
        "Do"
    ];

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();

    const primerDia = new Date(año, mes, 1);

    let inicio = primerDia.getDay();

    inicio = inicio === 0 ? 6 : inicio - 1;

    const diasMes = new Date(año, mes + 1, 0).getDate();

    const cambiarMes = (direccion) => {

        setFechaActual(
            new Date(año, mes + direccion, 1)
        );

    };

    const hoy = new Date();

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={() => cambiarMes(-1)}
                    className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition"
                >
                    <FaChevronLeft />
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">
                        {meses[mes]} {año}
                    </h2>
                    <p className="text-slate-500">
                        Selecciona un día
                    </p>
                </div>
                <button
                    onClick={() => cambiarMes(1)}
                    className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition"
                >
                    <FaChevronRight />
                </button>

            </div>

            <div className="grid grid-cols-7 gap-3 mb-4">
                {diasSemana.map((dia) => (
                    <div
                        key={dia}
                        className="text-center font-semibold text-slate-500"
                    >
                        {dia}
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-7 gap-3">
                {Array.from({ length: inicio }).map((_, index) => (
                    <div key={index}></div>
                ))}

                {Array.from({ length: diasMes }).map((_, index) => {
                    const dia = index + 1;
                    const esHoy =
                        dia === hoy.getDate() &&
                        mes === hoy.getMonth() &&
                        año === hoy.getFullYear();
                    const seleccionado =
                        dia === fechaSeleccionada.getDate() &&
                        mes === fechaSeleccionada.getMonth() &&
                        año === fechaSeleccionada.getFullYear();
                    const tieneActividad =
                        [5, 10, 15, 20, 25].includes(dia);

                    return (
                        <button
                            key={dia}
                            onClick={() =>
                                setFechaSeleccionada(
                                    new Date(año, mes, dia)
                                )
                            }
                            className={`
                                h-16 rounded-2xl border transition-all duration-200
                                ${
                                    seleccionado
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-105"
                                        : "bg-white border-slate-200 hover:bg-blue-50 hover:border-blue-300"
                                }
                            `}

                        >

                            <div className="flex flex-col items-center justify-center h-full">
                                <span className="font-semibold">
                                    {dia}
                                </span>

                                {esHoy && (
                                    <span className="text-[10px] mt-1">
                                        Hoy
                                    </span>
                                )}

                                {tieneActividad && (
                                    <div
                                        className={`
                                            w-2 h-2 rounded-full mt-1
                                            ${
                                                seleccionado
                                                    ? "bg-white"
                                                    : "bg-green-500"
                                            }
                                        `}
                                    />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}