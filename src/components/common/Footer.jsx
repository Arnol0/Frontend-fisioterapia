import { Link } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-4 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            PhysioTrack
                        </h2>
                        <p className="mt-5 leading-7 text-blue-100">
                            Plataforma diseñada para conectar pacientes y fisioterapeutas,
                            facilitando el seguimiento de tratamientos y la recuperación física.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Enlaces rápidos
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="transition hover:text-white"
                                >
                                    Inicio
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Servicios
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Beneficios
                                </a>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="transition hover:text-white"
                                >
                                    Iniciar sesión
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Contacto
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-300 text-lg" />
                                <span>
                                    Lima, Perú
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-300 text-lg" />
                                <span>
                                    +51 999 999 999
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-300 text-lg" />
                                <span>
                                    contacto@physiotrack.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Horario
                        </h3>

                        <div className="flex gap-3">
                            <FaClock className="text-blue-300 text-lg mt-1" />
                            <div>
                                <p className="font-medium">
                                    Lunes - Viernes
                                </p>
                                <p className="text-blue-100">
                                    8:00 am - 6:00 pm
                                </p>
                                <p className="font-medium mt-4">
                                    Sábados
                                </p>
                                <p className="text-blue-100">
                                    8:00 am - 1:00 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-blue-200">
                        © 2026 PhysioTrack. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <Link
                            to="/politica-privacidad"
                            className="transition hover:text-white"
                        >
                            Política de privacidad
                        </Link>

                        <Link
                            to="/terminos-condiciones"
                            className="transition hover:text-white"
                        >
                            Términos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}