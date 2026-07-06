import SidebarAdmin from "../components/administrador/SidebarAdmin";
import HeaderAdmin from "../components/administrador/HeaderAdmin";
import WelcomeBannerAdmin from "../components/administrador/WelcomeBannerAdmin";
import EstadisticasAdmin from "../components/administrador/EstadisticasAdmin";
import TablaPacientes from "../components/administrador/TablaPacientes";
import ActividadReciente from "../components/administrador/ActividadReciente";
import AlertasAdmin from "../components/administrador/AlertasAdmin";

export default function DashboardAdministrador() {

    return (

        <main className="min-h-screen bg-[#F8FAFC]">

            <SidebarAdmin />

            <section className="ml-64 px-10 py-8 pb-16">

                <HeaderAdmin />

                <WelcomeBannerAdmin />

                <EstadisticasAdmin />

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-8">

                    <div className="xl:col-span-8">

                        <TablaPacientes />

                    </div>

                    <div className="xl:col-span-4 flex flex-col gap-8">

                        <AlertasAdmin />

                        <ActividadReciente />

                    </div>

                </div>

            </section>

        </main>

    );

}