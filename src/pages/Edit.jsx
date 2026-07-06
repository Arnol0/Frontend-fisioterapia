import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft
} from "react-icons/fa";
import {
    getPatients,
    updatePatient,
    createPatient
} from "../services/patientService";

export default function Edit() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [patient, setPatient] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        watch
    } = useForm();

    // 🔵 CARGAR PERFIL
    const cargarPaciente = async () => {

        try {

            const user = JSON.parse(localStorage.getItem("usuario"));

            if (!user) {
                toast.error("Usuario no encontrado");
                return;
            }

            setUsuario(user);

            const res = await getPatients();
            const pacientes = res.data || res;

            const perfil = pacientes.find(p =>
                String(p?.user?._id) === String(user?._id)
            );

            if (perfil) {

                setPatient(perfil);

                // 🔥 SOLO CAMPOS NECESARIOS (evita bugs)
                reset({
                    dni: perfil.dni || "",
                    fechaNacimiento: perfil.fechaNacimiento || "",
                    sexo: perfil.sexo || "",
                    direccion: perfil.direccion || "",
                    peso: perfil.peso || "",
                    altura: perfil.altura || "",
                    contactoEmergencia: perfil.contactoEmergencia || {}
                });

            }

        } catch (error) {
            console.log(error);
            toast.error("Error al cargar perfil");
        }
    };

    useEffect(() => {
        cargarPaciente();
    }, []);

    // 🔵 IMC SEGURO
    const peso = watch("peso");
    const altura = watch("altura");

    const imc =
        peso && altura
            ? (Number(peso) / Math.pow(Number(altura) / 100, 2)).toFixed(2)
            : "";

    // 🔵 GUARDAR (CREATE O UPDATE)
    const onSubmit = async (data) => {

        try {

            const payload = {
                ...data,
                user: usuario?._id
            };

            // 🔴 UPDATE
            if (patient?._id) {

                await updatePatient(patient._id, payload);

                toast.success("Perfil actualizado correctamente");
            }

            // 🟢 CREATE
            else {

                const newPatient = await createPatient(payload);

                setPatient(newPatient);

                toast.success("Perfil creado correctamente");
            }

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.mensaje ||
                "Error al guardar perfil"
            );
        }
    };

    return (

        <div className="min-h-screen bg-slate-100 py-10">

            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 mb-4"
                    >
                        <FaArrowLeft />
                        Volver
                    </button>

                    <h1 className="text-3xl font-bold flex items-center gap-3">

                        <FaHeartbeat />

                        Editar Perfil

                    </h1>

                    <p className="text-cyan-100 mt-2">

                        Actualiza tu información personal.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-6 p-8"
                >

                    <div>

                        <label>Nombre</label>

                        <div className="relative">

                            <FaUser className="absolute left-4 top-4 text-gray-400"/>

                            <input
                                value={usuario?.nombre || ""}
                                disabled
                                className="w-full pl-12 py-3 rounded-xl border bg-gray-100"
                            />

                        </div>

                    </div>

                    <div>

                        <label>Apellido</label>

                        <div className="relative">

                            <FaUser className="absolute left-4 top-4 text-gray-400"/>

                            <input
                                value={usuario?.apellido || ""}
                                disabled
                                className="w-full pl-12 py-3 rounded-xl border bg-gray-100"
                            />

                        </div>

                    </div>

                    <div>

                        <label>Correo</label>

                        <div className="relative">

                            <FaEnvelope className="absolute left-4 top-4 text-gray-400"/>

                            <input
                                value={usuario?.correo || ""}
                                disabled
                                className="w-full pl-12 py-3 rounded-xl border bg-gray-100"
                            />

                        </div>

                    </div>

                    <div>

                        <label>Teléfono</label>

                        <div className="relative">

                            <FaPhoneAlt className="absolute left-4 top-4 text-gray-400"/>

                            <input
                                value={usuario?.telefono || ""}
                                disabled
                                className="w-full pl-12 py-3 rounded-xl border bg-gray-100"
                            />

                        </div>

                    </div>

                    <div>

                        <label>DNI</label>

                        <input
                            {...register("dni")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Fecha de nacimiento</label>

                        <input
                            type="date"
                            {...register("fechaNacimiento")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Sexo</label>

                        <select
                            {...register("sexo")}
                            className="w-full border rounded-xl p-3"
                        >

                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>

                        </select>

                    </div>

                    <div>

                        <label>Dirección</label>

                        <input
                            {...register("direccion")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Peso (kg)</label>

                        <input
                            type="number"
                            {...register("peso")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Altura (cm)</label>

                        <input
                            type="number"
                            {...register("altura")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div className="md:col-span-2">

                        <label>IMC</label>

                        <input
                            value={imc}
                            disabled
                            className="w-full bg-cyan-50 border rounded-xl p-3 font-bold text-cyan-700"
                        />

                    </div>

                    <div className="md:col-span-2">

                        <h2 className="text-xl font-bold">

                            Contacto de Emergencia

                        </h2>

                    </div>

                    <div>

                        <label>Nombre</label>

                        <input
                            {...register("contactoEmergencia.nombre")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Teléfono</label>

                        <input
                            {...register("contactoEmergencia.telefono")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div>

                        <label>Parentesco</label>

                        <input
                            {...register("contactoEmergencia.parentesco")}
                            className="w-full border rounded-xl p-3"
                        />

                    </div>

                    <div className="md:col-span-2">

                        <button
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3"
                        >

                            <FaSave />

                            Guardar Cambios

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}