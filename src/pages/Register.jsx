import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { toast } from "sonner";

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

            const usuario = await registerUser(nuevoUsuario);

            localStorage.setItem("token", usuario.token);

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );

            toast.success("Cuenta creada", {
            description: "Ahora puedes iniciar sesión en PhysioTrack."
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
        <div className="min-h-screen flex items-center justify-center bg-blue-50">

            <div className="bg-white p-10 rounded-xl shadow-xl w-[500px]">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    Crear Cuenta
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Portal de Fisioterapia y Rehabilitación
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >

                    <div>
                        <label>Nombre</label>

                        <input
                            type="text"
                            {...register("nombre", {
                                required: "Ingrese su nombre"
                            })}
                            className="w-full border rounded-lg p-3 mt-2"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.nombre?.message}
                        </p>
                    </div>

                    <div>
                        <label>Apellido</label>

                        <input
                            type="text"
                            {...register("apellido", {
                                required: "Ingrese su apellido"
                            })}
                            className="w-full border rounded-lg p-3 mt-2"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.apellido?.message}
                        </p>
                    </div>

                    <div>
                        <label>Correo electrónico</label>

                        <input
                            type="email"
                            {...register("correo", {
                                required: "Ingrese un correo"
                            })}
                            className="w-full border rounded-lg p-3 mt-2"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.correo?.message}
                        </p>
                    </div>

                    <div>
                        <label>Teléfono</label>

                        <input
                            type="text"
                            {...register("telefono")}
                            className="w-full border rounded-lg p-3 mt-2"
                        />
                    </div>
                    <div>
                        <label>Contraseña</label>

                        <input
                            type="password"
                            {...register("password", {
                                required: "Ingrese una contraseña"
                            })}
                            className="w-full border rounded-lg p-3 mt-2"
                        />

                        <p className="text-red-500 text-sm">
                            {errors.password?.message}
                        </p>
                    </div>

                    <div>
                        <label>Confirmar contraseña</label>

                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirme la contraseña"
                            })}
                            className="w-full border rounded-lg p-3 mt-2"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Registrarse
                    </button>

                </form>

                <p className="text-center mt-6">

                    ¿Ya tienes una cuenta?

                    <Link
                        to="/login"
                        className="text-blue-600 ml-2 font-semibold"
                    >
                        Iniciar sesión
                    </Link>

                </p>

            </div>

        </div>
    );
}