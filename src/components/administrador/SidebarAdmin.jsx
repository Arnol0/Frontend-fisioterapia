import {
    FaHeartbeat,
    FaChartPie,
    FaUsers,
    FaDumbbell,
    FaCalendarAlt,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menus = [

    {
        nombre: "Dashboard",
        ruta: "/administrador",
        icono: <FaChartPie />
    },

];

export default function SidebarAdmin() {

    return (

        <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0">

            {/* Logo */}

            <div className="h-24 flex items-center px-8 border-b">

                <FaHeartbeat
                    size={28}
                    className="text-blue-600"
                />

                <h1 className="ml-3 text-2xl font-bold text-slate-800">

                    PhysioTrack

                </h1>

            </div>

            {/* Menú */}

            <nav className="flex-1 px-5 py-8">

                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 mb-4">

                    Menú

                </p>

                <div className="space-y-2">

                    {menus.map((menu) => (

                        <NavLink

                            key={menu.nombre}

                            to={menu.ruta}

                            className={({ isActive }) =>

                                `flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300

                                ${

                                    isActive

                                        ? "bg-blue-600 text-white shadow-lg"

                                        : "text-slate-600 hover:bg-slate-100"

                                }`

                            }

                        >

                            <span className="text-lg">

                                {menu.icono}

                            </span>

                            {menu.nombre}

                        </NavLink>

                    ))}

                </div>

            </nav>

            {/* Perfil */}

            <div className="border-t border-slate-200 p-6">

                <div className="flex items-center gap-4">

                    <img

                        src="https://i.pravatar.cc/150?img=12"

                        alt="doctor"

                        className="w-14 h-14 rounded-2xl"

                    />

                    <div>

                        <h3 className="font-semibold text-slate-800">

                            Dr. Alejandro

                        </h3>

                        <p className="text-sm text-slate-500">

                            Traumatología

                        </p>

                    </div>

                </div>

                <button className="mt-6 w-full flex justify-center items-center gap-3 bg-red-50 text-red-600 py-3 rounded-2xl hover:bg-red-100 transition">

                    <FaSignOutAlt />

                    Cerrar sesión

                </button>

            </div>

        </aside>

    );

}