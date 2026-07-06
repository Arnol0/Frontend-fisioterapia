import {
    FaBell,
    FaSearch
} from "react-icons/fa";

export default function HeaderAdmin() {

    return (

        <header className="flex justify-between items-start">

            {/* Bienvenida */}

            <div>

                <p className="text-blue-600 font-semibold">

                    Buenos días 👋

                </p>

                <h1 className="mt-2 text-4xl font-bold text-slate-800">

                    Dr. Alejandro Silva

                </h1>

                <p className="mt-3 text-slate-500 text-lg">

                    Bienvenido nuevamente a PhysioTrack. Aquí tienes un resumen
                    de la actividad de tus pacientes.

                </p>

            </div>

            {/* Acciones */}

            <div className="flex items-center gap-5">

                {/* Buscador */}

                <div className="relative">

                    <FaSearch
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Buscar paciente..."
                        className="w-80 h-14 rounded-2xl bg-white border border-slate-200 pl-14 pr-5 shadow-sm outline-none focus:border-blue-500 transition"
                    />

                </div>

                {/* Campana */}

                <button
                    className="relative w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition"
                >

                    <FaBell
                        className="mx-auto text-slate-600"
                        size={18}
                    />

                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex justify-center items-center">

                        3

                    </span>

                </button>

            </div>

        </header>

    );

}