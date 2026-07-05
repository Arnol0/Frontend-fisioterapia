import {
    FaSignInAlt,
    FaUserPlus
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-3xl font-bold text-blue-600"
                >
                    PhysioTrack
                </Link>

                <nav className="hidden md:flex gap-8 font-medium">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600 transition"
                        }
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/servicios"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600 transition"
                        }
                    >
                        Servicios
                    </NavLink>

                    <NavLink
                        to="/beneficios"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600 transition"
                        }
                    >
                        Beneficios
                    </NavLink>

                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600 transition"
                        }
                    >
                        Contacto
                    </NavLink>

                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl transition font-medium flex items-center gap-2"
                    >
                        <FaSignInAlt />

                        Iniciar sesión
                    </Link>

                    <Link
                        to="/register"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition font-medium shadow-lg flex items-center gap-2"
                    >
                        <FaUserPlus />

                        Crear cuenta
                    </Link>
                </div>
            </div>
        </header>
    );
}