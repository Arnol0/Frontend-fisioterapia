import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
    FaHeartbeat,
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaLock,
    FaCheckCircle,
    FaArrowLeft
} from "react-icons/fa";

import { registerUser } from "../services/authService";

export default function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {

            toast.error("Las contraseñas no coinciden", {
                description: "Verifica que ambas contraseñas sean iguales."
            });

            return;

        }

        try {

            const nuevoUsuario = {

                nombre: data.nombre,
                apellido: data.apellido,
                correo: data.correo,
                telefono: data.telefono,
                edad: data.edad,
                password: data.password,
                rol: "paciente"

            };

            await registerUser(nuevoUsuario);

            toast.success("Cuenta creada", {
                description: "Ahora puedes iniciar sesión."
            });

            navigate("/login");

        } catch (error) {

            toast.error("No se pudo crear la cuenta", {
                description:
                    error.response?.data?.mensaje ||
                    "Inténtalo nuevamente."
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

            {/* Fondo */}

            <div className="absolute -top-40 -left-24 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-3xl"></div>

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg,#dbeafe 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            <div className="relative max-w-7xl mx-auto min-h-screen px-8 grid lg:grid-cols-2 gap-20 items-center">

                {/* Información */}

                <section>

                    <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-medium">

                        <FaHeartbeat />

                        Bienvenido a PhysioTrack

                    </div>

                    <h1 className="mt-8 text-6xl font-bold text-slate-800 leading-tight">

                        Comienza
                        <br />
                        tu recuperación.

                    </h1>

                    <p className="mt-8 text-xl leading-9 text-slate-600">

                        Crea una cuenta para acceder a tus rutinas,
                        registrar tu evolución y mantenerte en contacto
                        con tu fisioterapeuta.

                    </p>

                    <div className="mt-12 space-y-6">

                        {[
                            "Rutinas personalizadas",
                            "Seguimiento del tratamiento",
                            "Calendario de citas",
                            "Historial clínico"
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

                {/* Formulario */}

                <section className="flex justify-center">

                    <div className="w-full max-w-2xl bg-white rounded-[36px] shadow-2xl border border-slate-200 p-10">

                        <div className="text-center">

                            <div className="mx-auto w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center">

                                <FaHeartbeat
                                    className="text-white"
                                    size={36}
                                />

                            </div>

                            <h2 className="mt-6 text-3xl font-bold">

                                Crear cuenta

                            </h2>

                            <p className="mt-2 text-slate-500">

                                Regístrate para comenzar tu tratamiento.

                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-10"
                        >

                            <div className="grid md:grid-cols-2 gap-6">

                                <Input
                                    icon={<FaUser />}
                                    label="Nombre"
                                    error={errors.nombre?.message}
                                    register={register("nombre", {
                                        required: "Ingrese su nombre"
                                    })}
                                />

                                <Input
                                    icon={<FaUser />}
                                    label="Apellido"
                                    error={errors.apellido?.message}
                                    register={register("apellido", {
                                        required: "Ingrese su apellido"
                                    })}
                                />

                                <Input
                                    icon={<FaEnvelope />}
                                    label="Correo"
                                    type="email"
                                    error={errors.correo?.message}
                                    register={register("correo", {
                                        required: "Ingrese su correo"
                                    })}
                                />

                                <Input
                                    icon={<FaPhoneAlt />}
                                    label="Teléfono"
                                    register={register("telefono")}
                                />

                                <Input
                                    icon={<FaLock />}
                                    label="Contraseña"
                                    type="password"
                                    error={errors.password?.message}
                                    register={register("password", {
                                        required: "Ingrese una contraseña"
                                    })}
                                />

                                <Input
                                    icon={<FaLock />}
                                    label="Confirmar contraseña"
                                    type="password"
                                    error={errors.confirmPassword?.message}
                                    register={register("confirmPassword", {
                                        required: "Confirme la contraseña"
                                    })}
                                />

                            </div>

                            <button
                                className="mt-8 w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition hover:scale-[1.01]"
                            >

                                Crear cuenta

                            </button>

                            <p className="mt-8 text-center text-slate-500">

                                ¿Ya tienes una cuenta?

                                <Link
                                    to="/login"
                                    className="ml-2 font-semibold text-blue-600 hover:underline"
                                >

                                    Iniciar sesión

                                </Link>

                            </p>

                        </form>

                    </div>

                </section>

            </div>

        </main>

    );

}

function Input({

    label,
    icon,
    register,
    error,
    type = "text"

}) {

    return (

        <div>

            <label className="font-medium">

                {label}

            </label>

            <div className="relative mt-3">

                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">

                    {icon}

                </div>

                <input
                    type={type}
                    {...register}
                    className="w-full h-14 pl-12 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                />

            </div>

            {error && (

                <p className="mt-2 text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>

    );

}