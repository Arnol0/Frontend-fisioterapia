import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaShieldAlt
} from "react-icons/fa";

export default function HeroBeneficios() {
    return (
        <section className="pt-36 pb-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
                        <FaShieldAlt />
                        Beneficios de la plataforma
                    </span>
                    <h1 className="mt-8 text-5xl font-bold text-slate-800 leading-tight">
                        Una recuperación más organizada,
                        segura y eficiente.
                    </h1>
                    <p className="mt-8 text-lg leading-8 text-slate-600">
                        PhysioTrack te ayuda a mantener el control de tu tratamiento,
                        mejorar la comunicación con tu fisioterapeuta y realizar
                        un seguimiento constante de tu progreso.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-3"
                        >
                            Comenzar ahora
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-10">
                        <h2 className="text-3xl font-bold text-slate-800">
                            ¿Qué obtienes?
                        </h2>
                        <ul className="mt-8 space-y-5 text-slate-600">
                            <li>✔ Seguimiento personalizado</li>
                            <li>✔ Menor riesgo de olvidar ejercicios</li>
                            <li>✔ Comunicación con el especialista</li>
                            <li>✔ Acceso desde cualquier dispositivo</li>
                            <li>✔ Historial siempre disponible</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}