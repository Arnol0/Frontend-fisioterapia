import NavbarPaciente from "../components/common/NavbarPaciente";
import ResumenCard from "../components/dashboard/ResumenCard";
import RutinasCard from "../components/dashboard/RutinasCard";
import PerfilCard from "../components/dashboard/PerfilCard";
import RachaCard from "../components/dashboard/RachaCard";
import HeroDashboard from "../components/dashboard/HeroDashboard"

export default function DashboardPaciente() {
    return (
        <>
            <NavbarPaciente />

            <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10">

                <div className="max-w-7xl mx-auto px-6 space-y-8">

                    <HeroDashboard />

                    <div className="grid grid-cols-12 gap-8">

                        <section className="col-span-8 flex flex-col gap-8">

                            <ResumenCard />

                            <RutinasCard />

                        </section>

                        <aside className="col-span-4 flex flex-col gap-8">

                            <PerfilCard />

                            <RachaCard />

                        </aside>

                    </div>

                </div>

            </main>

        </>
    );
}