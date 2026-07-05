import NavbarPaciente from "../components/common/NavbarPaciente";

import EstadoPacienteCard from "../components/rutina/EstadoPacienteCard";
import ProgresoRutinaCard from "../components/rutina/ProgresoRutinaCard";
import ListaEjercicios from "../components/rutina/ListaEjercicios";
import ConsejoCard from "../components/rutina/ConsejoCard";
import BotonFinalizar from "../components/rutina/BotonFinalizar";

export default function Rutina() {

    return (

        <>
            <NavbarPaciente />

            <main className="max-w-7xl mx-auto py-10 space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-slate-800">
                        Rutina de rehabilitación
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Completa tus ejercicios diarios y registra tu progreso.
                    </p>

                </div>

                <section className="grid lg:grid-cols-2 gap-6">

                    <EstadoPacienteCard />

                    <ProgresoRutinaCard />

                </section>

                <ListaEjercicios />

                <ConsejoCard />

                <BotonFinalizar />

            </main>

        </>

    );

}