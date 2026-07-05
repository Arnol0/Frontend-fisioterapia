import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import {
    FaShieldAlt,
    FaUserLock,
    FaDatabase,
    FaUserCheck,
    FaEnvelope
} from "react-icons/fa";

export default function PoliticaPrivacidad() {

    return (

        <>
            <Header />

            <main className="bg-slate-50 pt-28 pb-20">

                <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">

                    <div className="max-w-5xl mx-auto px-8 text-center">

                        <h1 className="text-5xl font-bold">

                            Política de Privacidad

                        </h1>

                        <p className="mt-6 text-xl text-blue-100 leading-8">

                            Conoce cómo PhysioTrack recopila, utiliza y protege
                            la información personal de todos sus usuarios.

                        </p>

                    </div>

                </section>

                <div className="max-w-6xl mx-auto px-8 space-y-8 mt-16">

                    <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-10">

                        <div className="flex items-center gap-4">

                            <FaShieldAlt className="text-blue-600 text-3xl"/>

                            <h2 className="text-3xl font-bold">

                                Introducción

                            </h2>

                        </div>

                        <p className="mt-6 leading-8 text-slate-600">

                            PhysioTrack respeta la privacidad de sus usuarios.
                            Toda la información recopilada es utilizada únicamente
                            para brindar un mejor servicio, facilitar el seguimiento
                            terapéutico y mejorar continuamente la plataforma.

                        </p>

                    </section>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaUserLock className="text-blue-600 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Datos personales

                            </h3>

                            <ul className="mt-5 space-y-3 text-slate-600">

                                <li>• Nombre completo</li>
                                <li>• Correo electrónico</li>
                                <li>• Teléfono</li>
                                <li>• Contraseña cifrada</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaDatabase className="text-green-600 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Información clínica

                            </h3>

                            <ul className="mt-5 space-y-3 text-slate-600">

                                <li>• Rutinas</li>
                                <li>• Historial</li>
                                <li>• Registro EVA</li>
                                <li>• Progreso</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">

                            <FaUserCheck className="text-cyan-600 text-4xl"/>

                            <h3 className="mt-6 text-xl font-bold">

                                Uso de la información

                            </h3>

                            <ul className="mt-5 space-y-3 text-slate-600">

                                <li>• Gestionar tratamientos</li>
                                <li>• Mostrar estadísticas</li>
                                <li>• Mejorar la plataforma</li>
                                <li>• Comunicación clínica</li>

                            </ul>

                        </div>

                    </div>

                    <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-10">

                        <h2 className="text-3xl font-bold">

                            Derechos del usuario

                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">

                            <div>

                                <ul className="space-y-4 text-slate-600">

                                    <li>✔ Consultar su información.</li>

                                    <li>✔ Actualizar sus datos.</li>

                                    <li>✔ Solicitar la eliminación de la cuenta.</li>

                                    <li>✔ Revocar su consentimiento.</li>

                                </ul>

                            </div>

                            <div>

                                <p className="leading-8 text-slate-600">

                                    PhysioTrack implementa medidas de seguridad
                                    para proteger la información frente a accesos
                                    no autorizados y garantizar la confidencialidad
                                    de los datos personales.

                                </p>

                            </div>

                        </div>

                    </section>

                    <section className="bg-blue-600 rounded-3xl text-white p-10 text-center">

                        <FaEnvelope className="mx-auto text-5xl"/>

                        <h2 className="text-3xl font-bold mt-6">

                            ¿Tienes alguna consulta?

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