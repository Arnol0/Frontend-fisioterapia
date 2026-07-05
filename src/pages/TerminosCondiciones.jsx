import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import {
    FaFileContract,
    FaGavel,
    FaUserShield,
    FaExclamationTriangle,
    FaEnvelope
} from "react-icons/fa";

export default function TerminosCondiciones() {

    return (

        <>
            <Header />

            <main className="bg-slate-50 pt-28 pb-20">

                <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">

                    <div className="max-w-5xl mx-auto px-8 text-center">

                        <h1 className="text-5xl font-bold">

                            Términos y Condiciones

                        </h1>

                        <p className="mt-6 text-xl text-blue-100">

                            Condiciones generales para el uso de la plataforma
                            PhysioTrack.

                        </p>

                    </div>

                </section>

                <div className="max-w-6xl mx-auto px-8 space-y-8 mt-16">

                    <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-10">

                        <div className="flex items-center gap-4">

                            <FaFileContract className="text-blue-600 text-3xl"/>

                            <h2 className="text-3xl font-bold">

                                Aceptación

                            </h2>

                        </div>

                        <p className="mt-6 leading-8 text-slate-600">

                            Al acceder a PhysioTrack, el usuario acepta cumplir
                            los presentes términos y utilizar la plataforma de
                            forma responsable.

                        </p>

                    </section>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaUserShield className="text-blue-600 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Responsabilidades

                            </h3>

                            <ul className="mt-5 space-y-3 text-slate-600">

                                <li>• Información veraz</li>

                                <li>• Uso responsable</li>

                                <li>• Proteger credenciales</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaExclamationTriangle className="text-orange-500 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Restricciones

                            </h3>

                            <ul className="mt-5 space-y-3 text-slate-600">

                                <li>• No compartir cuentas</li>

                                <li>• No alterar registros</li>

                                <li>• No afectar el sistema</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaGavel className="text-cyan-600 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Propiedad intelectual

                            </h3>

                            <p className="mt-5 text-slate-600 leading-7">

                                Todo el contenido, logotipos e interfaz de
                                PhysioTrack pertenecen a sus desarrolladores.

                            </p>

                        </div>

                    </div>

                    <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-10">

                        <h2 className="text-3xl font-bold">

                            Modificaciones

                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">

                            PhysioTrack podrá actualizar los presentes términos
                            cuando sea necesario para mejorar la plataforma o
                            cumplir con cambios legales. Las modificaciones
                            serán publicadas en esta misma sección.

                        </p>

                    </section>

                    <section className="bg-blue-600 rounded-3xl text-white p-10 text-center">

                        <FaEnvelope className="mx-auto text-5xl"/>

                        <h2 className="text-3xl font-bold mt-6">

                            Contacto

                        </h2>

                        <p className="mt-4 text-blue-100">

                            contacto@physiotrack.com

                        </p>

                    </section>

                </div>

            </main>

            <Footer />

        </>

    );

}