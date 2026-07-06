import {

    FaUsers,
    FaCalendarAlt,
    FaHeartbeat,
    FaDumbbell

} from "react-icons/fa";

import ResumenCardAdmin from "./ResumenCardAdmin";

export default function EstadisticasAdmin() {

    return (

        <section className="grid grid-cols-4 gap-6 mt-8">

            <ResumenCardAdmin

                titulo="Pacientes"

                valor="124"

                descripcion="+8 nuevos este mes"

                icono={<FaUsers />}

                color="bg-blue-100 text-blue-600"

            />

            <ResumenCardAdmin

                titulo="Sesiones"

                valor="12"

                descripcion="Programadas para hoy"

                icono={<FaCalendarAlt />}

                color="bg-emerald-100 text-emerald-600"

            />

            <ResumenCardAdmin

                titulo="Alertas"

                valor="6"

                descripcion="Pacientes con seguimiento"

                icono={<FaHeartbeat />}

                color="bg-red-100 text-red-600"

            />

            <ResumenCardAdmin

                titulo="Rutinas"

                valor="18"

                descripcion="Actualmente activas"

                icono={<FaDumbbell />}

                color="bg-violet-100 text-violet-600"

            />

        </section>

    );

}