import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
    FaUserCircle,
    FaChevronDown,
    FaChevronRight,
    FaSignOutAlt,
    FaUser,
} from "react-icons/fa";

export default function NavbarPaciente() {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const navigate = useNavigate();

    const cerrarSesion = () => {

        // EL QUE LEA ESTO POR FAVOR AQUI VA EL LOGOUT
        // DEPENDE QUE USES EN EL BACK, PUEDES REEMPLAZAR ESTO
        // NO SE QUE USARAN PERO YO HARIA ALGO COMO
        // localStorage.removeItem("token");
        // localStorage.removeItem("usuario");

        setMenuAbierto(false);
        navigate("/");

    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
                <Link
                    to="/dashboard"
                    className="flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        P
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-blue-700">
                            PhysioTrack
                        </h1>

                        <p className="text-xs text-gray-500">
                            Portal del Paciente
                        </p>
                    </div>
                </Link>

                <nav className="hidden md:flex gap-8 font-medium">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-700 transition"
                        }
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/calendario"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-700 transition"
                        }
                    >
                        Calendario
                    </NavLink>

                    <NavLink
                        to="/rutina"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-700 transition"
                        }
                    >
                        Rutina
                    </NavLink>

                    <NavLink
                        to="/historial"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-700 transition"
                        }
                    >
                        Historial
                    </NavLink>

                </nav>

                <div className="relative">
                    <button
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        className="flex items-center gap-3 rounded-xl hover:bg-slate-100 px-3 py-2 transition"
                    >
                        <FaUserCircle
                            size={38}
                            className="text-blue-600"
                        />

                        <div className="text-left hidden lg:block">
                            <p className="font-semibold text-slate-800">
                                Fátima Pérez
                            </p>

                            <p className="text-xs text-slate-500">
                                Paciente
                            </p>
                        </div>

                        <FaChevronDown
                            className={`transition duration-300 ${menuAbierto ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {menuAbierto && (
                        <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                            <div className="px-6 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                <div className="flex flex-col items-center">
                                    <FaUserCircle
                                        size={72}
                                        className="text-white"
                                    />
                                    <h3 className="mt-3 text-xl font-bold">
                                        Fátima Pérez
                                    </h3>
                                    <span className="mt-2 px-4 py-1 rounded-full bg-white/20 text-sm">
                                        Paciente
                                    </span>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition">
                                <div className="flex items-center gap-3">
                                    <FaUser className="text-blue-600" />
                                    <span>
                                        Mi Perfil
                                    </span>
                                </div>
                                <FaChevronRight className="text-slate-400" />
                            </button>


                            <div className="p-5">
                                <button
                                    onClick={cerrarSesion}
                                    className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl transition flex items-center justify-center gap-3 font-semibold"
                                >
                                    <FaSignOutAlt />
                                    Cerrar sesión
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}