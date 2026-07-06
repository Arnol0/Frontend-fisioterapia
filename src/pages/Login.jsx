import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
    FaHeartbeat,
    FaCheckCircle,
    FaEnvelope,
    FaLock,
    FaArrowLeft
} from "react-icons/fa";

import { loginUser, getPerfil } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { setUsuario } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {

        try {

            const respuesta = await loginUser(data);

            localStorage.setItem("token", respuesta.token);

            const usuario = await getPerfil();

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );

            setUsuario(usuario);

            toast.success(`Bienvenido ${usuario.nombre}`, {
                description: "Inicio de sesión exitoso."
            });

            if (usuario.rol === "admin") {

                navigate("/administrador");

            } else if (usuario.rol === "paciente") {

                navigate("/dashboard");

            } else {

                toast.error("Rol no válido");

            }

        } catch (error) {

            toast.error("Error al iniciar sesión", {
                description:
                    error.response?.data?.mensaje ||
                    "Correo o contraseña incorrectos."
            });

        }

    };

    return (

        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

            <Link
                to="/"
                className="absolute top-8 left-8 z-30 flex items-center gap-3 group"
            >

                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition">

                    <FaHeartbeat
                        className="text-white"
                        size={22}
                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">

                        PhysioTrack

                    </h2>

                    <div className="flex items-center gap-2 mt-1">

                        <FaArrowLeft
                            className="text-xs text-slate-500 group-hover:text-blue-600 transition"
                        />

                        <span className="text-sm text-slate-500 group-hover:text-blue-600 transition">

                            Volver al inicio

                        </span>

                    </div>

                </div>

            </Link>

            {/* Blobs */}

            <div className="absolute -top-40 -left-24 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-3xl"></div>

            {/* Grid */}

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg,#dbeafe 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            <div className="relative max-w-7xl mx-auto min-h-screen px-8 grid lg:grid-cols-2 gap-20 items-center">

                {/* Lado izquierdo */}

                <section>

                    <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-medium">

                        <FaHeartbeat />

                        Plataforma inteligente de fisioterapia

                    </div>

                    <h1 className="mt-8 text-6xl font-bold text-slate-800 leading-tight">

                        Recupera tu movilidad.

                    </h1>

                    <p className="mt-8 text-xl leading-9 text-slate-600">

                        Accede a tus rutinas, registra tu progreso y mantén
                        una comunicación constante con tu fisioterapeuta.

                    </p>

                    <div className="mt-12 space-y-6">

                        {[
                            "Rutinas personalizadas",
                            "Seguimiento clínico",
                            "Calendario inteligente",
                            "Historial terapéutico"
                        ].map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-4 text-lg"
                            >

                                <FaCheckCircle className="text-green-500" />

                                <span className="text-slate-700">

                                    {item}

                                </span>

                            </div>

                        ))}

                    </div>

                </section>

                {/* Login */}

                <section className="flex justify-center">

                    <div className="w-full max-w-md bg-white rounded-[36px] border border-slate-200 shadow-2xl p-10">

                        <div className="text-center">

                            <div className="mx-auto w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center">

                                <FaHeartbeat
                                    className="text-white"
                                    size={36}
                                />

                            </div>

                            <h2 className="mt-6 text-3xl font-bold">

                                PhysioTrack

                            </h2>

                            <p className="mt-2 text-slate-500">

                                Bienvenido nuevamente

                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-10 space-y-6"
                        >

                            <div>

                                <label className="font-medium">

                                    Correo electrónico

                                </label>

                                <div className="relative mt-3">

                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="email"
                                        {...register("correo", {
                                            required: "Ingrese su correo"
                                        })}
                                        className="w-full h-14 pl-12 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                                    />

                                </div>

                                <p className="mt-2 text-red-500 text-sm">

                                    {errors.correo?.message}

                                </p>

                            </div>

                            <div>

                                <label className="font-medium">

                                    Contraseña

                                </label>

                                <div className="relative mt-3">

                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: "Ingrese su contraseña"
                                        })}
                                        className="w-full h-14 pl-12 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                                    />

                                </div>

                                <p className="mt-2 text-red-500 text-sm">

                                    {errors.password?.message}

                                </p>

                            </div>

                            <div className="flex justify-end">

                                <Link
                                    to="/recuperar-password"
                                    className="text-sm text-blue-600 hover:underline"
                                >

                                    ¿Olvidaste tu contraseña?

                                </Link>

                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg hover:shadow-xl hover:scale-[1.01]"
                            >

                                Iniciar sesión

                            </button>

                            <p className="text-center text-slate-500">

                                ¿No tienes una cuenta?

                                <Link
                                    to="/register"
                                    className="ml-2 font-semibold text-blue-600 hover:underline"
                                >

                                    Crear cuenta

                                </Link>

                            </p>

                        </form>

                    </div>

                </section>

            </div>

        </main>

    );

}