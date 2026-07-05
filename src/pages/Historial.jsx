import NavbarPaciente from "../components/common/NavbarPaciente";

import HistorialStats from "../components/historial/HistorialStats";
import GraficoProgreso from "../components/historial/GraficoProgreso";
import UltimoReporteCard from "../components/historial/UltimoReporteCard";
import TablaHistorial from "../components/historial/TablaHistorial";
import DescargarReporte from "../components/historial/DescargarReporte";

export default function Historial() {

    return (

        <>
            <NavbarPaciente />

            <main className="max-w-7xl mx-auto py-10 space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-slate-800">

                        Historial Clínico

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Consulta el seguimiento completo de tu tratamiento.

                    </p>

                </div>

                <HistorialStats />

                <section className="grid lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2">

                        <GraficoProgreso />

                    </div>

                    <UltimoReporteCard />

                </section>

                <TablaHistorial />

                <DescargarReporte />

            </main>

        </>

    );

}