import { useState } from "react";

import NavbarPaciente from "../components/common/NavbarPaciente";

import StatsCalendario from "../components/calendario/StatsCalendario";
import CalendarioWidget from "../components/calendario/CalendarioWidget";
import ProximaSesionCard from "../components/calendario/ProximaSesionCard";
import TimelineActividades from "../components/calendario/TimelineActividades";

export default function CalendarioPaciente() {

    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

    return (

        <>
            <NavbarPaciente />

            <main className="min-h-screen bg-slate-100">

                <div className="max-w-7xl mx-auto px-8 py-10">

                    <div className="mb-10">

                        <h1 className="text-4xl font-bold text-slate-800">
                            Calendario de Rehabilitación
                        </h1>

                        <p className="text-slate-500 mt-3">
                            Organiza tus sesiones y consulta tus actividades.
                        </p>

                    </div>

                    <StatsCalendario />

                    <div className="grid lg:grid-cols-3 gap-8 mt-10">

                        <div className="lg:col-span-2">

                            <CalendarioWidget
                                fechaSeleccionada={fechaSeleccionada}
                                setFechaSeleccionada={setFechaSeleccionada}
                            />

                        </div>

                        <div>

                            <ProximaSesionCard
                                fechaSeleccionada={fechaSeleccionada}
                            />

                        </div>

                    </div>

                    <div className="mt-10">

                        <TimelineActividades
                            fechaSeleccionada={fechaSeleccionada}
                        />

                    </div>

                </div>

            </main>

        </>

    );

}