import {
    FaUserCircle,
    FaEnvelope,
    FaPhoneAlt,
    FaUserEdit
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function PerfilCard({ patient }) {

    const { usuario } = useAuth();
    const navigate = useNavigate();

    return (

        <div className="bg-white rounded-[30px] shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="px-8 pb-8">
                <div className="flex flex-col items-center -mt-14">
                    <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
                        <FaUserCircle
                            size={82}
                            className="text-blue-600"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mt-4 text-slate-800">
                        {usuario?.nombre} {usuario?.apellido}
                    </h2>

                    <span className="mt-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        Paciente Activo
                    </span>

                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <FaEnvelope className="text-blue-600"/>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Correo
                            </p>

                            <p className="font-semibold">
                                {usuario?.correo}
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <FaPhoneAlt className="text-blue-600"/>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                Teléfono
                            </p>

                            <p className="font-semibold">
                                {usuario?.telefono}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                <div>
                    <p className="text-xs text-slate-500">DNI</p>
                    <p className="font-semibold">{patient?.dni}</p>
                </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div>
                        <p className="text-xs text-slate-500">Peso</p>
                        <p className="font-semibold">{patient?.peso} kg</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div>
                        <p className="text-xs text-slate-500">Altura</p>
                        <p className="font-semibold">{patient?.altura} cm</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div>
                        <p className="text-xs text-slate-500">Sexo</p>
                        <p className="font-semibold">{patient?.sexo}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div>
                        <p className="text-xs text-slate-500">Dirección</p>
                        <p className="font-semibold">{patient?.direccion}</p>
                    </div>
                </div>
                <button  onClick={() => navigate("/editar-perfil")} className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 font-semibold flex justify-center items-center gap-3 transition">
                    <FaUserEdit/>
                    Editar perfil
                </button>
            </div>
        </div>
    );
}