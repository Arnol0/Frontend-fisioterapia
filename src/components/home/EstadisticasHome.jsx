import {
    FaClipboardCheck,
    FaHeartbeat,
    FaChartLine,
    FaBell
} from "react-icons/fa";

export default function Servicios() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-center text-4xl font-bold">
                    Todo lo que necesitas
                </h2>

                <p className="text-center text-gray-600 mt-5">
                    Herramientas diseñadas para mejorar la recuperación del paciente.
                </p>

                <div className="grid md:grid-cols-4 gap-8 mt-16">
                    <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
                        <FaClipboardCheck className="text-5xl text-blue-600 mb-6" />

                        <h3 className="text-xl font-bold">
                            Rutinas
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Ejercicios personalizados para cada tratamiento.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
                        <FaHeartbeat className="text-5xl text-red-500 mb-6" />

                        <h3 className="text-xl font-bold">
                            Registro del dolor
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Evaluación mediante Escala EVA.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
                        <FaChartLine className="text-5xl text-green-500 mb-6" />

                        <h3 className="text-xl font-bold">
                            Progreso
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Visualización del avance terapéutico.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">
                        <FaBell className="text-5xl text-yellow-500 mb-6" />

                        <h3 className="text-xl font-bold">
                            Recordatorios
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Notificaciones para cumplir tus rutinas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}